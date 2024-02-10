from bs4 import BeautifulSoup

with open("../public/index.html", 'r') as f:
    result = BeautifulSoup(f, "html.parser")
    print(result)

print("hello world")