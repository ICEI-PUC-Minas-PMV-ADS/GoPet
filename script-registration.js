// Mudar a foto de perfil 

'use strict'

let photo = document.getElementById("photoCadastro");
let file = document.getElementById("flImage");

file.addEventListener('change', (event) => {
    
    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});

// Visualizador de senha cadastro

let btnPassword = document.querySelector(".fa-eye")

btnPassword.addEventListener('click', () =>{

    let inputPassword = document.querySelector("#password")
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')}
        else{
            inputPassword.setAttribute('type', 'password')
        }
    }
)

// Visualizador de confirmar a senha

let btnConfirm = document.querySelector("#passwordView")

btnConfirm.addEventListener('click', () =>{

    let inputPasswordC = document.querySelector("#confirmPassword")
    if(inputPasswordC.getAttribute('type') == 'password'){
        inputPasswordC.setAttribute('type', 'text')}
        else{
            inputPasswordC.setAttribute('type', 'password')
        }
    }
)

