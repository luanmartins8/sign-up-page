// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

function onChangePassword() {
    const password = senhaConfirm.password().value;
    senhaConfirm.passwordRequiredError().style.display = password ? "none" : "block";

    senhaConfirm.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

}

function onChangeConfirmPassword() {
    const password = senhaConfirm.password().value;
    const confirmPassword = senhaConfirm.confirmPassword().value;

    senhaConfirm.confirmPasswordDoesntMatchError().style.display = 
    password == confirmPassword ? "none" : "block";
 
}

const senhaConfirm = {
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error')
}

const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'Endere??o n??o encontrado';
        } else {
            preencherFormulario(endereco)
        }
    }
}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);

const cadastroBtn = document.getElementById('btn')
cadastroBtn.addEventListener("click", cadastroSucess)
function cadastroSucess() {

    swal("Logado com sucesso!", "", "success");
 ??????
????????return
}
