function pegarPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function validarNovoPaciente(paciente) {
    var erros = [];

    document.querySelector("#mensagem-validacao").innerHTML = "";

    if (!ehUmPesoValido(paciente.peso)) erros.push("Peso inválido!");
    if (!ehUmaAlturaValida(paciente.altura)) erros.push("Altura inválida!");

    return erros;
}

function ehUmPesoValido(peso) {
    if (peso >= 500 || peso <= 0)  return false;
    return true;
}

function ehUmaAlturaValida(altura) {
    if (altura >= 2.5 || altura <= 0)  return false;
    return true;
}

function adicionarPaciente(paciente) {

    var erros = validarNovoPaciente(paciente);

    box = document.querySelector("#mensagem-validacao");

    if (erros.length > 0) {
        montarMensagensValidacao(erros, box);
        return;
    }

    inserirPacienteNaTabela(paciente);
}

function montarCampo(linha, valor, classe) {
    var campo = document.createElement("td");
    campo.textContent = valor;
    campo.classList.add(classe);
    linha.appendChild(campo);
}

function montarMensagensValidacao(erros, boxMensagens) {
    for (var i = 0; i < erros.length; i++) {
        var mensagem = document.createElement("li");
        mensagem.textContent = erros[i];
        boxMensagens.appendChild(mensagem);
    }
}

function inserirPacienteNaTabela(paciente) {
    var pacientes = document.querySelector("#tabela-pacientes");
    var linha = document.createElement("tr");
    linha.classList.add("paciente");

    montarCampo(linha, paciente.nome, "info-nome");
    montarCampo(linha, paciente.peso, "info-peso");
    montarCampo(linha, paciente.altura, "info-altura");
    montarCampo(linha, paciente.gordura, "info-gordura");
    montarCampo(linha, paciente.imc, "info-imc");

    console.log("Adicionando o paciente -> " + paciente.nome + " - " + paciente.peso
                + " - " + paciente.altura + " - " + paciente.gordura);

    pacientes.appendChild(linha);
}

function limparFormularioEValidacao(form, box) {
    form.reset();
    box.innerHTML = "";
}