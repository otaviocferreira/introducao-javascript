var filtro = document.querySelector("#filtro");

filtro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    var valorDaBusca = this.value;

    pacientes.forEach(function(paciente) { 
        if (valorDaBusca.length > 0) {
            var valorDoNome = paciente.querySelector(".info-nome").textContent;
            
            var expressao = new RegExp(valorDaBusca, "i");

            if (!expressao.test(valorDoNome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        } else {
            paciente.classList.remove("invisivel");
        }
    });
});