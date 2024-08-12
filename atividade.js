function verificarIdade(idade) {
    // Define a idade mínima necessária
    const idadeMinima = 18;

    // Verifica se a idade é válida e maior ou igual à idade mínima
    if (idade >= idadeMinima) {
        console.log("Você tem idade suficiente.");
    } else if (idade > 0) {
        console.log("Você não tem idade suficiente.");
    } else {
        console.log("Por favor, insira uma idade válida.");
    }
}

// Exemplo de uso:
verificarIdade(20); // Você tem idade suficiente.
verificarIdade(15); // Você não tem idade suficiente.
verificarIdade(-5); // Por favor, insira uma idade válida.
//--------------------------------------------

// cpfValidator.js

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    //cpf = cpf.replace(/\D+/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (caso de CPF inválido)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcula e valida o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += (10 - i) * parseInt(cpf.charAt(i), 10);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9), 10)) {
        return false;
    }

    // Calcula e valida o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += (11 - i) * parseInt(cpf.charAt(i), 10);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10), 10)) {
        return false;
    }

    return true;
}

module.exports = validarCPF;


//---------------------------------------

// passwordValidator.js

/**
 * Função para validar uma senha com base em regras específicas.
 * @param {string} senha - A senha a ser verificada.
 * @returns {boolean} - Retorna true se a senha atender a todos os critérios, caso contrário, false.
 */
function validarSenha(senha) {
    if (typeof senha !== 'string') {
       
    }

    // Regra 1: A senha deve ter pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }

    // Regra 2: Deve conter pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    // Regra 3: Deve conter pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) {
        return false;
    }

    // Regra 4: Deve conter pelo menos um número
    if (!/\d/.test(senha)) {
        return false;
    }

    // Regra 5: Deve conter pelo menos um caractere especial
    if (!/[!@#$%^&*]/.test(senha)) {
        return false;
    }

    return true;
}

module.exports = validarSenha;
//----------------------------------------------
// fullNameValidator.js

/**
 * Função para validar um nome completo.
 * @param {string} nome - O nome completo a ser verificado.
 * @returns {boolean} - Retorna true se o nome atender aos critérios, caso contrário, false.
 */
function validarNomeCompleto(nome) {
    if (typeof nome !== 'string') {
      //  throw new Error('O nome deve ser uma string.');
    }

    // Remove espaços extras e divide o nome em partes
   // const partes = nome.trim().split(/\s+/);

    // Regra 1: Deve conter pelo menos dois nomes (nome e sobrenome)
   // if (partes.length < 2) {
    //    return false;
    }

    // Verifica se cada parte começa com letra maiúscula e não contém caracteres inválidos
    const nomeCompletoValido = partes.every(parte => {
        return /^[A-Z][a-zà-ú]*$/.test(parte);
    });

   // return nomeCompletoValido;


module.exports = validarNomeCompleto;

