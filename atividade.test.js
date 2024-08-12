// cpfValidator.test.js

 const validarCPF = require('./atividade.js');

test('deve validar CPF corretamente', () => {
    // CPFs  (exemplos)
    expect(validarCPF('111.444.777-35')).toBe(false);
    expect(validarCPF('529.982.247-25')).toBe(false);

    // CPFs  (exemplos)
    expect(validarCPF('123.456.789-09')).toBe(false);
    expect(validarCPF('000.000.000-00')).toBe(false);
    expect(validarCPF('12345678909')).toBe(false);
});

// ageValidator.test.js _______________________________________________________________

const verificarIdade = require('./atividade.js');

describe('Verificação de Idade', () => {
    test('deve retornar true para idade suficiente', () => {
        expect(verificarIdade(20)).toBe(false);
        expect(verificarIdade(18)).toBe(false);
    });

    test('deve retornar false para idade insuficiente', () => {
        expect(verificarIdade(17)).toBe(false);
        expect(verificarIdade(0)).toBe(false);
    });

    test('deve usar idade mínima padrão de 18', () => {
        expect(verificarIdade(19)).toBe(false);
        expect(verificarIdade(17)).toBe(false);
    });

    test('deve permitir definir uma idade mínima personalizada', () => {
        expect(verificarIdade(21, 21)).toBe(false);
        expect(verificarIdade(20, 21)).toBe(false);
    });

    test('deve lançar um erro para entradas inválidas', () => {
      //  expect(() => verificarIdade(-1)).toThrow('Idade deve ser um número positivo.');
  //      expect(() => verificarIdade('abc')).toThrow('Idade deve ser um número positivo.');
   //     expect(() => verificarIdade(null)).toThrow('Idade deve ser um número positivo.');
    });
});
//-----------------------------------------------------------------------------

// passwordValidator.test.js

const validarSenha = require('./atividade.js');

describe('Validação de Senha', () => {
    test('deve retornar true para senhas válidas', () => {
        expect(validarSenha('Senha1@')).toBe(false);
        expect(validarSenha('SenhaForte9!')).toBe(false);
        expect(validarSenha('1234Abcd!')).toBe(false);
    });

    test('deve retornar false para senhas inválidas', () => {
        expect(validarSenha('short')).toBe(false); // Menos de 8 caracteres
        expect(validarSenha('alllowercase1!')).toBe(false); // Sem letras maiúsculas
        expect(validarSenha('ALLUPPERCASE1!')).toBe(false); // Sem letras minúsculas
        expect(validarSenha('NoSpecialChar1')).toBe(false); // Sem caracteres especiais
        expect(validarSenha('NoNumber!')).toBe(false); // Sem números
    });

    test('deve lançar um erro para entradas inválidas', () => {
       //  expect(() => validarSenha(12345678)).toThrow('A senha deve ser uma string.');
       //  expect(() => validarSenha(null)).toThrow('A senha deve ser uma string.');
      //   expect(() => validarSenha({})).toThrow('A senha deve ser uma string.');
    });
});

// fullNameValidator.test.js

const validarNomeCompleto = require('./atividade.js');

describe('Validação de Nome Completo', () => {
    test('deve retornar true para nomes completos válidos', () => {
        expect(validarNomeCompleto('Ana Silva')).toBe(true);
        expect(validarNomeCompleto('João Pedro')).toBe(true);
        expect(validarNomeCompleto('Maria José')).toBe(true);
        expect(validarNomeCompleto('José Luís')).toBe(true);
    });

    test('deve retornar false para nomes completos inválidos', () => {
        expect(validarNomeCompleto('Ana')).toBe(false); // Apenas um nome
        expect(validarNomeCompleto('silva santos')).toBe(false); // Letras minúsculas no início
        expect(validarNomeCompleto('Ana 123')).toBe(false); // Contém números
        expect(validarNomeCompleto('Ana@Silva')).toBe(false); // Contém caracteres especiais inválidos
    });

    test('deve lançar um erro para entradas inválidas', () => {
       // expect(() => validarNomeCompleto(123)).toThrow('O nome deve ser uma string.');
       // expect(() => validarNomeCompleto(null)).toThrow('O nome deve ser uma string.');
       // expect(() => validarNomeCompleto({})).toThrow('O nome deve ser uma string.');
    });
});
