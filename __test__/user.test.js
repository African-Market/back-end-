const request = require('supertest')
const { server } = require('../server');
process.env.NODE_ENV = 'test'
const db = require('../data/config');

beforeAll(async () => {
  // run the migrations and do any other setup here
  await db.migrate.latest()
})

describe('User routes', () => {
  it('It should create a user', async () => {
    const res = await request(server)
      .post('/register')
      .send({ email: 'testing@mail.com', business_name: 'test', password: 'password' })
    expect(res.statusCode).toEqual(201)
    expect(res.body.user.email).toEqual('testing@mail.com')
  })
  it('It should login a user', async () => {
    const res = await request(server)
      .post('/login')
      .send({ email: 'testing@mail.com', password: 'password' })
    expect(res.statusCode).toEqual(201)
    expect(res.body.user.email).toEqual('testing@mail.com')
  })
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
