 //Caminho da API
var api = 'http://localhost:53731/api/paciente/';

var form = document.getElementById('form-paciente');

//Pegando os Input
var elementosPaciente = {                     
    nome: document.querySelector('#nome'),
    cpf: document.querySelector('#cpf'),
    sexo: document.querySelector('#sexo'),
    email: document.querySelector('#email'),       
    telefone: document.querySelector('#celular'),
    data_Nasc: document.querySelector('#data-nasc'),
    senha: document.querySelector('#senha')
};

// "Escuta" o evento de ENVIAR do Formulário do Paciente
document.querySelector('#form-paciente').addEventListener('submit', function (event) {

    event.preventDefault();

    // Objeto Paciente
    var paciente = {
        nome: elementosPaciente.nome.value,
        cpf: elementosPaciente.cpf.value,
        sexo: elementosPaciente.sexo.value,
        email: elementosPaciente.email.value,
        telefone: elementosPaciente.telefone.value,
        data_Nasc: elementosPaciente.data_Nasc.value,
        senha: elementosPaciente.senha.value
    };

        inserirPaciente(paciente);
        form.reset();
});

// Função que insere os pacientes 
function inserirPaciente(paciente) {

    var request = new Request(api, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(paciente)
    });

    fetch(request)
        .then(function (response) {
            console.log(response);
            if (response.status == 201) {
                alert("Paciente cadastrado com sucesso");
            } else {
		        response.json().then(function(message){
			    alert(message.error);
		});
            }
        })
        .catch(function (response) {
            console.log(response);
            alert("Desculpe, ocorreu um erro no servidor.");
        });
}

// Mascáras 
// function fMasc(objeto,mascara) {
//     obj=objeto
//     masc=mascara
//     setTimeout("fMascEx()",1)
// }
// function fMascEx() {
//     obj.value=masc(obj.value)
// }
// function mTel(tel) {
//     tel=tel.replace(/\D/g,"")
//     tel=tel.replace(/^(\d)/,"($1")
//     tel=tel.replace(/(.{3})(\d)/,"$1)$2")
//     if(tel.length == 9) {
//         tel=tel.replace(/(.{1})$/,"-$1")
//     } else if (tel.length == 10) {
//         tel=tel.replace(/(.{2})$/,"-$1")
//     } else if (tel.length == 11) {
//         tel=tel.replace(/(.{3})$/,"-$1")
//     } else if (tel.length == 12) {
//         tel=tel.replace(/(.{4})$/,"-$1")
//     } else if (tel.length > 12) {
//         tel=tel.replace(/(.{4})$/,"-$1")
//     }
//     return tel;
// }
// function mCNPJ(cnpj){
//     cnpj=cnpj.replace(/\D/g,"")
//     cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
//     cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
//     cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
//     cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
//     return cnpj
// }
// function mCPF(cpf){
//     cpf=cpf.replace(/\D/g,"")
//     cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
//     cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
//     cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
//     return cpf
// }
// function mCEP(cep){
//     cep=cep.replace(/\D/g,"")
//     cep=cep.replace(/^(\d{2})(\d)/,"$1.$2")
//     cep=cep.replace(/\.(\d{3})(\d)/,".$1-$2")
//     return cep
// }
// function mNum(num){
//     num=num.replace(/\D/g,"")
//     return num
// }

$(document).ready(function(){
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 00000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
  });


// confirmar se senhas digitadas estão iguais
var senha1 = document.getElementById("senha");
var senha2 = document.getElementById("confirmar-senha");

function validaSenha() {
    if (senha1.value != senha2.value) {
        senha2.setCustomValidity("Senhas diferentes!");
    } else {
        senha2.setCustomValidity('');
    }
}

senha1.onchange = validatePassword;
senha2.onkeyup = validatePassword;