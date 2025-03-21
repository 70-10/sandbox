# ドメイン名からIPアドレスへの変換ツール

このプロジェクトは、Node.jsを使用して独自のDNSリゾルバを実装し、ドメイン名をIPアドレスに変換するツールです。UDPソケットを直接使用してDNSプロトコルを実装することで、低レベルのネットワークプログラミングを学習することができます。

## 特徴

- Raw UDPソケットを使用したDNSクエリの実装
- Google Public DNS (8.8.8.8) を使用
- Promise ベースの非同期API
- エラーハンドリングとタイムアウト処理
- DNSプロトコルのバイナリメッセージフォーマット処理

## 使用方法

```javascript
const { domainToIPAddress } = require('./index.js');

// ドメイン名からIPアドレスを取得
domainToIPAddress('foo.mti.co.jp')
    .then(ip => console.log(`IPアドレス: ${ip}`))
    .catch(err => console.error(`エラー: ${err.message}`));
```

## 実装の詳細

### DNSクエリの構造

```
[ヘッダー部 (12バイト)]
[質問セクション]
  - ドメイン名（エンコード済み）
  - タイプ (A = 1)
  - クラス (IN = 1)
```

### エラーハンドリング

以下のようなエラーケースに対応しています：

#### 1. 無効なドメイン名

```javascript
// 無効なドメイン名のケース
domainToIPAddress('invalid-domain')
    .catch(err => {
        if (err.message === 'Parameter is not a domain') {
            console.error('エラー: 無効なドメイン名が指定されました');
            // エラー処理（例：ログ記録、ユーザーへの通知など）
        }
    });

// ドメイン名が文字列でないケース
domainToIPAddress(12345)
    .catch(err => {
        if (err.message === 'Parameter is not a domain') {
            console.error('エラー: ドメイン名は文字列で指定してください');
        }
    });
```

#### 2. タイムアウトエラー

```javascript
// DNSクエリがタイムアウト（5秒）した場合
domainToIPAddress('very-slow-dns.example.com')
    .catch(err => {
        if (err.message === 'DNS query timed out') {
            console.error('エラー: DNSクエリがタイムアウトしました');
            // タイムアウト時の処理（例：再試行ロジックなど）
            return retryQuery();
        }
    });

// 再試行ロジックの例
function retryQuery(domain, attempts = 3) {
    return domainToIPAddress(domain)
        .catch(err => {
            if (attempts > 0 && err.message === 'DNS query timed out') {
                return retryQuery(domain, attempts - 1);
            }
            throw err;
        });
}
```

#### 3. UDPソケットエラー

```javascript
// ソケットエラーのハンドリング
domainToIPAddress('example.com')
    .catch(err => {
        if (err.message.startsWith('UDP error:')) {
            console.error('ネットワークエラー:', err.message);
            // ネットワーク状態の確認やフォールバック処理
            return checkNetworkAndRetry();
        }
    });

// DNSクエリ送信エラー
domainToIPAddress('example.com')
    .catch(err => {
        if (err.message.startsWith('Failed to send DNS query:')) {
            console.error('クエリ送信エラー:', err.message);
            // 代替DNSサーバーの使用を検討
        }
    });
```

#### 4. 無効なDNSレスポンス

```javascript
// レスポンスが短すぎる場合
domainToIPAddress('example.com')
    .catch(err => {
        if (err.message === 'Invalid DNS response: too short') {
            console.error('エラー: 不正なDNSレスポンス');
            // 代替の解決方法を試行
        }
    });

// Aレコードを含まないレスポンス
domainToIPAddress('example.com')
    .catch(err => {
        if (err.message === 'DNS response is too short to contain an A record') {
            console.error('エラー: Aレコードが見つかりません');
            // 他のレコードタイプの確認を検討
        }
    });
```

#### 5. DNSエラーレスポンスコード

```javascript
// DNSサーバーからのエラーコード
domainToIPAddress('non-existent-domain.com')
    .catch(err => {
        if (err.message.startsWith('DNS error: response code')) {
            console.error('DNSエラー:', err.message);
            // エラーコードに基づく適切な処理
            switch (err.message.split(' ').pop()) {
                case '3': // NXDOMAIN
                    console.error('ドメインが存在しません');
                    break;
                case '2': // SERVFAIL
                    console.error('DNSサーバーエラー');
                    break;
                // 他のエラーコードの処理
            }
        }
    });
```

#### 6. 応答レコードなし

```javascript
// 応答レコードが存在しない場合
domainToIPAddress('example.com')
    .catch(err => {
        if (err.message === 'No answer records in DNS response') {
            console.error('エラー: DNS応答にレコードがありません');
            // 代替のDNS解決方法を試行
            return alternativeDNSLookup();
        }
    });
```

## 制限事項

- Aレコードのみサポート
- IPv4のみ対応
- キャッシュ機能なし
- 単一のDNSサーバー（Google DNS）のみ使用
- 基本的なパラメータバリデーションのみ実装

## 今後の改善点

1. より堅牢なドメイン名バリデーション
2. 他のDNSレコードタイプのサポート
3. 複数DNSサーバーのサポート
4. レスポンスのキャッシング
5. IPv6サポート

## ライセンス

MITライセンス

## 注意事項

このプロジェクトは教育目的で作成されており、本番環境での使用は推奨されません。Node.jsの組み込みDNSリゾルバの使用を推奨します。