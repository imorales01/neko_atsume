import axios from 'axios';

// set user with test credentials
beforeAll(() => {

});

// get count of items in shop

// get item in shop by id
describe('get item in shop by id', () => {
	it('should return an item from db', async () => {
		const item = await axios.get('http://localhost:5000/api/shop/:id');
		expect(item.data).toEqual(expect.anything());
	});
});

// buy an item in the shop
test('buy item in shop', async () => {

});

// check if specified item has been bought
describe('check if specified item has been bought', () => {
  expect.assertions(2);
  it('should return true', async () => {
    const flag = await axios.get('http://localhost:5000/api/shop/1');
    expect(flag.data).toBe(true);
  });
  it('should return false', async () => {
    // item with id 300000 does not exist so will always return false
    const flag = await axios.get('http://localhost:5000/api/shop/300000');
    expect(flag.data).toBe(false);
  });
});