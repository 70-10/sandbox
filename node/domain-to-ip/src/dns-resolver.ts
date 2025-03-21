import dgram from 'node:dgram';

/**
 * 指定したドメイン名をDNSクエリを用いてIPアドレスに変換します。
 * ※ パラメータチェックは簡易版です。
 *
 * @param {string} domainName - 解決したいドメイン名
 * @returns {Promise<string>} - 解決されたIPアドレス
 */
export function domainToIPAddress(domainName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        // パラメータチェック（簡易版）
        if (typeof domainName !== 'string' || domainName.indexOf('.') === -1) {
            return reject(new Error('Parameter is not a domain'));
        }

        const client = dgram.createSocket('udp4');
        const googleDNS = '8.8.8.8';

        // タイムアウト処理（例：5秒）
        const timeout = setTimeout(() => {
            client.close();
            reject(new Error('DNS query timed out'));
        }, 5000);

        // DNSクエリのヘッダ部を作成
        const header = Buffer.from([
            0x00, 0x01, // Transaction ID
            0x01, 0x00, // Flags (Standard query)
            0x00, 0x01, // 質問数
            0x00, 0x00, // Answer RRs
            0x00, 0x00, // Authority RRs
            0x00, 0x00  // Additional RRs
        ]);

        // ドメイン名をDNSクエリ形式に変換
        const questionParts: Buffer[] = [];
        domainName.split('.').forEach(label => {
            const len = Buffer.from([label.length]);
            const labelBuffer = Buffer.from(label, 'ascii');
            questionParts.push(len);
            questionParts.push(labelBuffer);
        });
        // ドメイン名の終端
        questionParts.push(Buffer.from([0x00]));

        // クエリタイプ (Aレコード = 1) とクラス (IN = 1)
        const queryTypeAndClass = Buffer.from([0x00, 0x01, 0x00, 0x01]);

        // 完全なクエリバッファを結合
        const queryBuffer = Buffer.concat([header, ...questionParts, queryTypeAndClass]);

        // クエリ送信
        client.send(queryBuffer, 0, queryBuffer.length, 53, googleDNS, (err) => {
            if (err) {
                clearTimeout(timeout);
                client.close();
                return reject(new Error(`Failed to send DNS query: ${err.message}`));
            }
        });

        // UDPエラーのハンドリング
        client.on('error', (err) => {
            clearTimeout(timeout);
            client.close();
            return reject(new Error(`UDP error: ${err.message}`));
        });

        // 応答受信時の処理
        client.on('message', (msg) => {
            clearTimeout(timeout);
            try {
                if (msg.length < 12) {
                    throw new Error('Invalid DNS response: too short');
                }
                // ヘッダ解析: 4バイト目の下位4ビットが RCODE
                const rcode = msg[3] & 0x0f;
                if (rcode !== 0) {
                    throw new Error(`DNS error: response code ${rcode}`);
                }
                // Answer count の取得（バイト6-7）
                const answerCount = msg.readUInt16BE(6);
                if (answerCount === 0) {
                    throw new Error('No answer records in DNS response');
                }
                // このシンプルな実装では、レスポンスの最後の4バイトをIPアドレスと見なす
                if (msg.length < 16) {
                    throw new Error('DNS response is too short to contain an A record');
                }
                const ipBytes = msg.slice(msg.length - 4);
                const ipAddress = Array.from(ipBytes).join('.');
                client.close();
                return resolve(ipAddress);
            } catch (err) {
                client.close();
                return reject(err);
            }
        });
    });
}
