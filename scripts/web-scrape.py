import requests
import json
from bs4 import BeautifulSoup
import sys


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


def get_items(category):
    try:
        r = requests.get(f'http://nekoatsume.wikia.com/wiki/Goodies/{category}')
        
    except:
        print("Connection to wikia failed")

    soup = BeautifulSoup(r.text, "html.parser")
    tables = soup.find_all('table', style="width:100%; text-align: center; border: 1px solid lightgray; background-color:WhiteSmoke")

    items = []

    for table in tables:
        description = table.find('td', colspan="4", style="background-color: white;").get_text().strip()

        name = table.find('th', style="background-color: white; font-size: 9pt;").get_text().strip()

        price = table.find('th', style="background-color: white;")

        if price.img['alt'] == 'SilverFish':
            premium = False
        else:
            premium = True

        price = price.get_text().strip()

        if table.find('a', class_="image image-thumbnail link-internal").img['alt'] == "Small icon":
            size = "small"
        else:
            size = "large"

        items.append({
            'name': name,
            'category': category,
            'description': description,
            'price': price,
            'premium': premium,
            'size': size,
            'released_in_game': False
        })

    return items


def get_released_list(flag):
    if (flag == "--cats"):
        released_list = {
            'Snowball': True,
        }
    elif (flag == "--items"):
        released_list = {
            'Red Ball': {'action_category': ''},
            'Sheep Cushion': {'action_category': ''},
            'Sakuramochi Cushion': {'action_category': ''},
        }
    return released_list


def is_released(name, released_list):
    if name in released_list:
        return True
    return False


def preprocess(objects, object_list, id_, released_list):
    for obj in objects:
        id_ += 1
        obj['releasedInGame'] = is_released(obj['name'], released_list)
        obj['ID'] = id_   
        object_list.append(obj)
    return object_list


def main():
    flags_enum = {"cats" : "--cats", "items" : "--items"}

    if (len(sys.argv) >= 2
            and (sys.argv[1] != flags_enum["cats"]
                and sys.argv[1] != flags_enum["items"])):
        print("Usage: npm run web-scrape -- [ --cats | --items ]")
        return

    flags_to_run = []
    if len(sys.argv) is 2:
        flags_to_run = [sys.argv[1]]
    else:
        flags_to_run = ['--cats', '--items']

    for flag in flags_to_run:
        id_ = 1
        object_list = []
        released_list = get_released_list(flag)

        if flag == "--cats":
            cats = get_cats()
            object_ = "cats"
            object_list = preprocess(cats, object_list, id_, released_list)
        
        elif flag == "--items":
            object_ = "items"    
            categories = [
                'Balls',
                'Boxes',
                'Beds',
                'Furniture',
                'Tunnels',
                'Toys',
                'Heating',
                'Bags&Hiding',
                'Scratching',
                'Baskets',
            ]
            for category in categories:
                items = get_items(category)
                object_list = preprocess(items, object_list, id_, released_list)
                id_ = len(object_list)

        with open(f'populate_db/{object_}.json', 'w+') as f:  
            json.dump(object_list, f)


if __name__ == '__main__':
    main()
