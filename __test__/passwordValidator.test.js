const passwordValidate = require('../src/passwordValidate');

describe('Validador de Senhas', () => {

  test('deve rejeitar senha com menos de 8 caracteres', () => {
    //arrange
    const password = 'Ab1!xyz';
    //act
    const result = passwordValidate(password);
    //assert
    expect(result).toBe(false);
  });

  


})