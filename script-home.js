'use strict'

// Visualizar senha do passageiro

let btnPassword = document.querySelector(".fa-eye")

btnPassword.addEventListener('click', () =>{

    let inputPassword = document.querySelector("#passwordLogin")
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')}
        else{
            inputPassword.setAttribute('type', 'password')
        }
    }
)

// Visualizar senha do motorista

let btnPassword2 = document.querySelector("#passwordView2")

btnPassword2.addEventListener('click', () =>{

    let inputPassword = document.querySelector("#passwordLogin2")
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')}
        else{
            inputPassword.setAttribute('type', 'password')
        }
    }
)

// Login do passageiro

function loginTutor(){
    let username = document.querySelector('#user')
    let userLabel = document.querySelector('#userLabel')

    let password = document.querySelector('#passwordLogin')
    let passwordLabel = document.querySelector('#passwordLabel')

    let errorMsg = document.querySelector('#errorMsg')
    let userListTutor = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    userListTutor = JSON.parse(localStorage.getItem('userListTutor'))

    userListTutor.forEach((item)=>{
        if(username.value == item.emailCad && password.value == item.passwordCad){
            userValid = {
                nome: item.nameCad,
                user: item.emailCad,
                senha: item.passwordCad,
                confirmacaoSenha: item.confirmPasswordCad,
                dataNascimento: item.birthdayCad,
                cpf: item.cpfCad,
                cep: item.cepCad,
                endereco: item.addressCad,
                numero: item.houseNumberCad,
                complemento: item.complementCad,
                bairro: item.neighborhoodCad,
                cidade: item.cityCad,
                estado: item.stateCad,
                celular: item.cellphoneCad
            }
        }
    })

    if(username.value == userValid.user && password.value == userValid.senha && userValid.user.length > 1){
        window.location.href = 'areadotutor.html'
        errorMsg.setAttribute('style', 'display:none')
        errorMsg.innerHTML = ''
        let tokenP = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        sessionStorage.setItem('tokenP', tokenP)

        sessionStorage.setItem('userLogadoP', JSON.stringify(userValid))

    }else{
        errorMsg.setAttribute('style', 'display:block')
        errorMsg.innerHTML = '<strong>O e-mail e/ou a senha est??o incorretos</strong>'
        username.focus()
    }
}

// Login do motorista

function loginDriver(){
    let usernameDriver = document.querySelector('#user2')
    let userLabelDriver = document.querySelector('#userLabel2')

    let passwordDriver = document.querySelector('#passwordLogin2')
    let passwordLabelDriver = document.querySelector('#passwordLabel2')

    let errorMsg2 = document.querySelector('#errorMsg2')
    let userListDriver = []

    let userValidDriver = {
        nome: '',
        user: '',
        senha: ''
    }

    userListDriver = JSON.parse(localStorage.getItem('userListDriver'))

    userListDriver.forEach((item)=>{
        if(usernameDriver.value == item.emailCad && passwordDriver.value == item.passwordCad){
            userValidDriver = {
                nome: item.nameCad,
                user: item.emailCad,
                senha: item.passwordCad,
                confirmacaoSenha: item.confirmPasswordCad,
                dataNascimento: item.birthdayCad,
                cpf: item.cpfCad,
                cnh: item.cnhCad,
                cep: item.cepCad,
                endereco: item.addressCad,
                numero: item.houseNumberCad,
                complemento: item.complementCad,
                bairro: item.neighborhoodCad,
                cidade: item.cityCad,
                estado: item.stateCad,
                celular: item.cellphoneCad,
                modelo: item.modelCad,
                cor: item.colorCad,
                placa: item.plaqueCad
            }
        }
    })

    if(usernameDriver.value == userValidDriver.user && passwordDriver.value == userValidDriver.senha 
        && userValidDriver.user.length > 1){
        window.location.href = 'areadomotorista.html'
        errorMsg2.setAttribute('style', 'display:none')
        errorMsg2.innerHTML = ''
        
        let tokenM = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        sessionStorage.setItem('tokenM', tokenM)

        sessionStorage.setItem('userLogadoM', JSON.stringify(userValidDriver))

    }else{
        errorMsg2.setAttribute('style', 'display:block')
        errorMsg2.innerHTML = '<strong>O e-mail e/ou a senha est??o incorretos</strong>'
        usernameDriver.focus()
    }
}

function recuperarSenha(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
}

function fechar(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

function recuperarSenha2(){
    let modal2 = document.querySelector('.modal2')
    modal2.style.display = 'block';
}

function fechar2(){
    let modal2 = document.querySelector('.modal2')
    modal2.style.display = 'none';
}