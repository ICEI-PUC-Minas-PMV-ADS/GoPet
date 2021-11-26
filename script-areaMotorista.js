let userLogado = JSON.parse(localStorage.getItem('userLogadoM')) 

document.getElementById("name").value = userLogado.nome;
document.getElementById("email").value = userLogado.user;
document.getElementById("birthday").value = userLogado.dataNascimento;
document.getElementById("CPF").value = userLogado.cpf;
document.getElementById("CNH").value = userLogado.cnh;
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
document.getElementById("model").value = userLogado.modelo;
document.getElementById("color").value = userLogado.cor;
document.getElementById("plaque").value = userLogado.placa;
document.getElementById("password").value = userLogado.senha;
document.getElementById("confirmPassword").value = userLogado.confirmacaoSenha;


if(localStorage.getItem('token') == null){
    alert('Você deve fazer login para acessar esta página!')
    window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogadoM')
    window.location.href = 'index.html'
}

function salvarAlteracoes(){
    localStorage.removeItem('userLogadoM')
    alert('Os dados foram alterados com sucesso!')
}