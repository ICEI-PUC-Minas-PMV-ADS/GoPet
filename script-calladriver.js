(function() {
    console.log('dom readddyyy')
    // valideFields()
    
 })();

function callADriver() {
    valideFields()
    const origem = document.getElementById('origin').value
    const destination = document.getElementById('destination').value
    const pet1 = document.getElementById('petSelect1').value
    const pet2 = document.getElementById('petSelect2').value
    console.log('call a drive')
    console.log('form values')
    console.log({ origem, destination, pet1, pet2 })
}

function toggleButton(disabled = false) {
    // document.getElementById('btn_call_driver') && 
    if(document.getElementById('btn_call_driver')) {
        document.getElementById('btn_call_driver').disabled = disabled;
    }
}

function showValidationFeedback(field) {
    alert(`O Campo ${field} e obrigatório!`)
}

/**
 * @author Paloma Chave
 * origem: required
 * destination: required
 * pet1 || pet2: required
 * appointment_date optional
 */
function valideFields(){
    console.log('im going to validadeeee')
    if(document.getElementById('origin') &&
        document.getElementById('origin').value == ''
    ) {
        showValidationFeedback('Origem')
        toggleButton(true)
        return
    } else {
        toggleButton(false)
    }


    if(document.getElementById('destination') &&
        document.getElementById('destination').value == '') {
        showValidationFeedback('Destino')
        toggleButton(true)
        return
    } else {
        toggleButton(false)
    }

    if(document.getElementById('petSelect1') &&
        document.getElementById('petSelect1').value == '' ||
        document.getElementById('petSelect2') &&
        document.getElementById('petSelect2').value === ''
    ) {
        showValidationFeedback('Selecione ao menos 1 pet!')
        toggleButton(true)
        return
    } else {
        toggleButton(false)
    }
}

