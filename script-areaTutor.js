let userLogado = JSON.parse(localStorage.getItem('userLogadoP')) 

document.getElementById("name").value = userLogado.nome;
document.getElementById("email").value = userLogado.user;
document.getElementById("birthday").value = userLogado.dataNascimento;
document.getElementById("CPF").value = userLogado.cpf;
document.getElementById("CEP").value = userLogado.cep;
document.getElementById("address").value = userLogado.endereco;
document.getElementById("houseNumber").value = userLogado.numero;
if(userLogado.complemento){
    document.getElementById("complement").value = userLogado.complemento;
}
document.getElementById("neighborhood").value = userLogado.bairro;
document.getElementById("city").value = userLogado.cidade;
document.getElementById("state").value = userLogado.estado;
document.getElementById("cellphone").value = userLogado.celular;
document.getElementById("password").value = userLogado.senha;
document.getElementById("confirmPassword").value = userLogado.confirmacaoSenha;


if (localStorage.getItem('token') == null){
    alert('Você deve fazer login para acessar esta página!')
    window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
    localStorage.removeItem('userLogadoP')
}

function salvarAlteracoes(){
    localStorage.removeItem('userLogadoP')
    alert('Os dados foram alterados com sucesso!')
}