var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var campoImc = paciente.querySelector(".info-imc");

    var pesoEhValido = ehUmPesoValido(peso);
    var alturaEhValida = ehUmaAlturaValida(altura);
    var mensagemValidacao;

    if (!pesoEhValido) {
        pesoEhValido = false;
        mensagemValidacao = "Peso inválido!!!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        mensagemValidacao = "Altura inválida!!!";
        paciente.style.backgroundColor = "lightcoral";
        paciente.style.color = "white";
    }

    if (pesoEhValido && alturaEhValida) {
        campoImc.textContent = calcularIMC(peso, altura);
    } else {
        campoImc.textContent = mensagemValidacao;
    }
}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = pegarPacienteDoForm(form);

    adicionarPaciente(paciente);

    form.reset();
});

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}