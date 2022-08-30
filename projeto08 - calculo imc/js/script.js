import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import {calcIMC, notNumber} from "./utils.js"

// Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = (event) => {
    event.preventDefault()

    inputWeight.oninput = () => AlertError.close()

    if(notNumber(inputHeight.value) ==  false && notNumber(inputWeight.value) == false){
        let IMC = calcIMC(inputHeight.value, inputWeight.value)
        Modal.message.innerText = `Seu IMC é ${IMC}`
       
        Modal.open()
    }
    else {
        AlertError.open()
    }
    

}

    
