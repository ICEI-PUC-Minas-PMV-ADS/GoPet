'use strict'

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