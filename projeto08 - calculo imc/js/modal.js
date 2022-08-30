//Abrir e fechar o Modal
export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.title-modal'),
    buttonClose: document.querySelector('.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

//Fechando o modal
Modal.buttonClose.onclick = () => {
    Modal.close()
}

//Fechando o modal com a tecla ESC
window.addEventListener('keydown', event => { 
    if (event.key ==='Escape') {
        Modal.close()
    }
} )

