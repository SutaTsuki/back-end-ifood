document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação simples
    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido! Redirecionando...');
        // Redirecionar para outra página ou realizar outras ações
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos!';
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    // Validações
    if (senha !== confirmarSenha) {
        document.getElementById('error-message').textContent = 'As senhas não coincidem!';
        return;
    }

    if (nome && email && senha && confirmarSenha) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode enviar os dados para um backend ou redirecionar o usuário
    } else {
        document.getElementById('error-message').textContent = 'Preencha todos os campos!';
    }
});