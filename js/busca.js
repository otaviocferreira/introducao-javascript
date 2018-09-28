var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var requisicao = new XMLHttpRequest();

    requisicao.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    var mensagemErroNaBusca = document.querySelector("#erro-busca");
    mensagemErroNaBusca.classList.add("invisivel");

    requisicao.addEventListener("load", function() {
        if (requisicao.status == 200) {
            var pacientes = JSON.parse(requisicao.responseText);

            pacientes.forEach(function(paciente) {
                adicionarPaciente(paciente);
            });
        } else {            
            mensagemErroNaBusca.classList.remove("invisivel");
        }        
    });

    requisicao.send();
});



