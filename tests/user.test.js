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
        // Assert that the database was changed correctly  
    const user = await User.findByPk(response._body.user.id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(user.email).not.toBe('MyPass777!')
    });
  })
})
   