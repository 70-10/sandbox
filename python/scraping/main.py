import requests
import bs4

res = requests.get('http://nostarch.com')

try:
    res.raise_for_status()
    no_starch_soutp = bs4.BeautifulSoup(res.text, "html.parser")
    print(type(no_starch_soutp))
except Exception as exc:
    print("{}".format(exc))
