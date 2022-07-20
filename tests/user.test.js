const app = require('../src/app')
const request = require('supertest')
const User = require('../src/models/user')
describe('USER TEST SUITE', () => {
  beforeAll(() => User.sync({ force: true }));

  describe('CREATION OF HABITS', () => {
    it('should be able to sign up', async () => {
     const response=await request(app).post('/api/register')
        .send({
          name: 'Joshi',
          email: 'j@gmail.com',
          education : 'MBA'
      }).expect(201)
     
    });
  })
})
   