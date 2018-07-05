// get count of items in shop

// get item in shop by id
test('get item in shop by id', async () => {
	const item = await axios.get('http://localhost:5000/api/shop/:id');
	expect(item.data).toEqual(expect.anything());
});

// buy an item in the shop
test('buy item in shop', async () => {

});

// check if specified item has been bought
test('check if specified item has been bought', async () => {
	expect.assertions(2);
	let flag = await axios.get('http://localhost:5000/api/shop/1');
	expect(flag.data).toBe(true);
	// item with id 300000 does not exist so will always return false
	flag = await axios.get('http://localhost:5000/api/shop/300000');
	expect(flag.data).toBe(false);
});