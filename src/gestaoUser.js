// Declare um vetor contendo informações sobre usuários de um site

const usuarios = [
    {
        id: 1,
        nome: 'Maria Joana',
        email: 'maria@user.com',
        senha: '123456',
        expirado: false
    },
    {
        id: 2,
        nome: 'João Silva',
        email: 'joao@user.com',
        senha: 'senha123',
        expirado: true
    },
    {
        id: 3,
        nome: 'Caio Augusto',
        email: 'caio@user.com',
        senha: 'acesso01',
        expirado: false
    }
];

// Construa uma função para realizar login

export function realizarLogin(email, senha) {

    // Verifica se o email existe
    const emailExiste = usuarios.find(
        user => user.email === email
    );

    // Verifica se existe combinação válida
    const usuarioValido = usuarios.find(
        user => user.email === email && user.senha === senha
    );

    // Credenciais incorretas
    // caso o email não exista ou a senha esteja incorreta
    if (!emailExiste || !usuarioValido) {
        return 'Credenciais incorretas';
    }

    // Credenciais expiradas
    if (usuarioValido.expirado === true) {
        return 'Renove suas credenciais';
    }

    // Login realizado com sucesso
    return 'Login realizado com sucesso';
}