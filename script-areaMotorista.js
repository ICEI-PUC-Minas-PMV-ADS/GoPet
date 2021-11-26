let userLogado = JSON.parse(localStorage.getItem('userLogadoM')) 

document.getElementById("name").value = userLogado.nome;
document.getElementById("email").value = userLogado.user;

if (localStorage.getItem('token') == null){
    alert('Você deve fazer login para acessar esta página!')
    window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}