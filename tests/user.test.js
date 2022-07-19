const app = require('../src/app')
const {setupDatabase} = require('./fixtures/db')
beforeEach(setupDatabase)
const request = require('supertest')
describe('Post Endpoints', () => {
  it('Should signup a new user', async () => {
    const res = await request(app).post('/api/register')
      .send({
        name: "mmm",
        email: "priya@gmail.com",
        education: "BTech"
      }).expect(201)
   
  })
})