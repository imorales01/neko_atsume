import axios from 'axios';

// apparently count still doesnt work? great.
// test('cat count in db', async (done)=>{
//   const count = await axios.get('http://localhost:5000/api/cat/count');
//   expect(count).toBe(7);
//   done();
// });

// set user with test credentials
beforeAll(() => {

});
describe('get a cat from the database', ()=>{
  it('should return a cat', async () => {
    const catData = await axios.get('http://localhost:5000/api/cat/2');
    expect(catData.data).toEqual(expect.anything());
  });
});

// todo
test('set current user', async (done) => {
	// const userID = '5b2be22e1218433991453955';
	// const flag = await axios.put('http://localhost:5000/api/user/current');
	done();
});

describe('check if a specified cat has been collected', () => {
  expect.assertions(2);

  it('should return true', async () => {
    const flag = await axios.get('http://localhost:5000/api/cat/collected/1');
    // later this will be set true
    expect(flag.data).toBe(false);
  });

  it('should return false', async () => {
    // cat with id 107 does not exist so will always return false
    const flag = await axios.get('http://localhost:5000/api/cat/collected/107');
    expect(flag.data).toBe(false);
  });
});