// const { stub } = require('sinon');
// const { expect } = require('chai');

// const UserController = require ('../controllers/userController');
// const { index } = require ('../controllers/userController');
// const UserModel = require('../models/userModel');


// describe('API tests', () => {
//   describe('Get all users', () => {

//     it('should return a list of users', async () => {
      
//       // Arrange
//       const input = [
//         {
//           name: "Vitor",
//           cpfcnpj: "10310918901",
//           blacklist: false
//         }
//       ];

//       const expectation = [
//         {
//           name: "Vitor",
//           cpfcnpj: "10310918901",
//           blacklist: false
//         }
//       ]

//       stub(UserController, 'index').returns(Promise.resolve(input));

//       // Act
//       const result = await index();
      
//         // Assert
//       expect(result).to.deep.equal(expectation);
//     })
//   });

// })