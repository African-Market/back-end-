const request = require('supertest')
const { server } = require('../server');
process.env.NODE_ENV = 'test'
const db = require('../data/config');

beforeAll(async () => {
  // run the migrations and do any other setup here
  await db.migrate.latest()
})

describe('item routes', () => {
  it('It should create a item', async () => {
    const res = await request(server)
      .post('/register')
      .send({ email: 'testing@mail.com', business_name: 'test', password: 'password' })
    console.log('res: ', res.statusCode);
    const resTwo = await request(server)
      .post('/items')
      .send({ location: 'hayward', name: 'product-00' , quantity: '1' , description:'box', price: 5000.00 ,  user_id: 1  })
      console.log('resTwo: ', resTwo);
      expect(resTwo.statusCode).toEqual(201)
  })
  // it('It should login a user', async () => {
  //   const res = await request(server)
  //     .post('/login')
  //     .send({ email: 'testing@mail.com', password: 'password' })
  //   expect(res.statusCode).toEqual(201)
  //   expect(res.body.user.email).toEqual('testing@mail.com')
  // })
  // it('should not create a new scheme when scheme_name is not unique', async () => {
  //   const res = await request(server)
  //     .post('/')
  //     .send({ scheme_name: "John's Scheme" })
  //   expect(res.statusCode).toEqual(500)
  // })
  // it('should delete scheme by id', async () => {
  //   const res = await request(server)
  //     .delete('/1')
  //   expect(res.statusCode).toEqual(200)
  // })
  // it('should throw 404 when scheme cannot be found', async () => {
  //   const res = await request(server)
  //     .delete('/1')
  //   expect(res.statusCode).toEqual(404)
  // })
})
