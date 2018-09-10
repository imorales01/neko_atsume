import requests
import json
from bs4 import BeautifulSoup

def get_cats():
    try:
        r = requests.get(f'http://nekoatsume.wikia.com/wiki/Cats')
        
    except:
        print("Connection to wikia failed")

    soup = BeautifulSoup(r.text, "html.parser")
    tables = soup.find_all('table', style="width:100%; text-align: center; border: 1px solid lightgray; background-color:WhiteSmoke")

    cats = []

    for index, table in enumerate(tables):
        cat_rows = table.find_all('tr', style='background-color: white;')

        for cat_row in cat_rows:
            info = cat_row.find_all('td')

            name = cat_row.find('img')['alt']
            appearance = info[0].get_text().strip()
            personality = info[1].get_text().strip()
            power_level = info[2].get_text().strip()
            if index == 0:
                special = False
            else:
                special = True

            cats.append({
                'name': name,
                'description': {
                    'appearance': appearance,
                    'personality': personality,
                    'powerLevel': power_level,
                },
                'special': special,
            })

    return cats


def is_released(name):
    if name in released_cats():
        return True
    return False


def released_cats():
    released_cats = {
        'Snowball': True,     
    }
    return released_cats


def preprocess(cats, cats_arr, id_):
    for cat in cats:
        id_ += 1
        cat['releasedInGame'] = is_released(cat['name'])
        cat['catID'] = id_   
        cats_arr.append(cat)
    return cats_arr


def main():
    id_ = 1

    cats_arr = []

    cats = get_cats()
    cats_arr = preprocess(cats, cats_arr, id_)

    with open('populate_db/cats.json', 'w+') as f:  
        json.dump(cats_arr, f)


if __name__ == '__main__':
    main()