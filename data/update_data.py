"""This script updates the data in the data.json file."""

import json
import requests
from bs4 import BeautifulSoup

def parse_menu(url):
    """This function parses the menu from the url."""
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    rows = list(soup.find("table", {"class": "cltable"}).find_all("tr"))[2:]
    foods = []

    for i in range(0, len(rows), 2):
        food = {}
        food["number"] = rows[i].find("td", {"class": "clno"}).text
        food["name"] = rows[i].find("td", {"class": "clname"}).text
        pricetext = rows[i].find("td", {"class": "clprc"}).text
        food["price"] = int("".join([x for x in pricetext if x.isdigit()]))
        food["ingredients"]  = rows[i+1].find("td", {"class": "clingr"}).text
        foods.append(food)
    return foods

data = {
    "pizzas": parse_menu("https://pizzeriagibraltar.com/"),
    "kebabs": parse_menu("https://pizzeriagibraltar.com/kebaber/"),
    "salads": parse_menu("https://pizzeriagibraltar.com/sallader/"),
    "pastas": parse_menu("https://pizzeriagibraltar.com/pasta/")
}

with open('data.json', 'w', encoding="utf-8") as outfile:
    json.dump(data, outfile)
    outfile.close()
