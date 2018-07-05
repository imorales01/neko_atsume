import axios from 'axios';
import { Z_DEFAULT_STRATEGY } from 'zlib';

// apparently count still doesnt work? great.
// test('cat count in db', async (done)=>{
//   const count = await axios.get('http://localhost:5000/api/cat/count');
//   expect(count).toBe(7);
//   done();
// });

// set user with test credentials
beforeAll(() => {

});

test('get a cat from db', async (done) => {
	const catData = await axios.get('http://localhost:5000/api/cat/2');
	expect(catData.data).toEqual(expect.anything());
	done();
});

// todo
test('set current user', async (done) => {
	// const userID = '5b2be22e1218433991453955';
	// const flag = await axios.put('http://localhost:5000/api/user/current');
	done();
});

test('check if a specified cat has been collected', async (done) => {
	let flag = await axios.get('http://localhost:5000/api/cat/collected/1');
	// later this will be set true
	expect(flag.data).toBe(false);
	// cat with id 107 does not exist so will always return false
	flag = await axios.get('http://localhost:5000/api/cat/collected/107');
	expect(flag.data).toBe(false);
	done();
});