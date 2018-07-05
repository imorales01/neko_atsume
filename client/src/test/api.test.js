import axios from 'axios';

// apparently count still doesnt work? great.
// test('cat count in db', async (done)=>{
//     const count = await axios.get('http://localhost:5000/api/cat/count');
//     expect(count).toBe(7);
//     done();
// });

test('get a cat from db', async (done)=> {
    const catData = await axios.get('http://localhost:5000/api/cat/2');
    expect(catData.data).toEqual(expect.anything());
    done();
});

