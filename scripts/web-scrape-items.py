import requests
import json
from bs4 import BeautifulSoup

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


def is_released(name):
    if name in released_items():
        return True
    return False


def released_items():
    released_items = {
        'Red Ball': {'action_category': ''},
        'Sheep Cushion': {'action_category': ''},
        'Sakuramochi Cushion': {'action_category': ''},
    }
    return released_items


def preprocess(items, items_arr, id_):
    for item in items:
        id_ += 1
        item['releasedInGame'] = is_released(item['name'])
        item['itemID'] = id_   
        item['actionCategory'] = released_items().get(item['name'], {}).get('action_category', None)
        items_arr.append(item)
    return items_arr


def main():
    id_ = 1

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
    items_arr = []

    for category in categories:
        items = get_items(category)
        items_arr = preprocess(items, items_arr, id_)
        id_ = len(items_arr)

    with open('populate_db/items.json', 'w+') as f:  
        json.dump(items_arr, f)


if __name__ == '__main__':
    main()