import requests
from bs4 import BeautifulSoup

def parse(url):
    response = requests.get(url)
    tree = BeautifulSoup(response.text, 'html.parser')
    print(tree)
    result = tree.findAll('span', {'id': 'result_box'})[0]
    print(result)
    #text_span = result.findAll('span')[0]
    #print(text_span.text)

parse('https://translate.google.com/?ie=UTF-8&hl=en&tab=wT#en/sr/some%20%23%20word%20%23%20to')