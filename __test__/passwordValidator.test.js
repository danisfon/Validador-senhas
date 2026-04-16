const validePassword = require('../src/Service/passwordValidate');

describe('Validador de Senhas', () => {

  test('deve rejeitar senha com menos de 8 caracteres', () => {
    //arrange
    const password = 'Ab1!xyz';
    //act
    const result = validePassword(password);
    //assert
    expect(result).toBe(false);
  });


})