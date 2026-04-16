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

  test('Senha deve ter letra maiúscula', () => {
    //arrange
    const password = 'ab1!xyzabc';  
    //act
    const result = passwordValidate(password);
    //assert
    expect(result).toBe(false);
  });
  test('Senha deve ter letra minúscula', () => {
    //arrange
    const password = 'AB1!XYZDEF1';  
    //act
    const result = passwordValidate(password);
    //assert
    expect(result).toBe(false);
  });
  test('deve rejeitar senha sem número', () => {
    //arrange
    const password = 'Abcdefgh!';
    //act
    const result = passwordValidate(password);
    //assert
    expect(result).toBe(false);
  });

});

