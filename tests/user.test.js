const app = require('../src/app')
const request = require('supertest')
const User = require('../src/models/user')
const createUser=require('../src/controllers/createUser')
describe('USER TEST SUITE', () => {
  // beforeAll(() => User.sync({ force: true }));

  describe('CREATION OF HABITS', () => {
    it('should be able to sign up', async () => {
    User.findOne=jest.fn().mockReturnValueOnce({
name:'Joshi'
    })
     
User.prototype.save=jest.fn().mockImplementation(()=>{});
await expect(createUser("Joshi","j@gmail.com","mba")).rejects.toThrowError();
    });

  })
})
   