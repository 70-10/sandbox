import MeCab    #MeCabを読み出す
#形態素解析を行う
tagger = MeCab.Tagger()
parse_str = tagger.parse('きゃりーぱみゅぱみゅがGINZA SIXでインスタ映えするライブを行う')
print(parse_str)
