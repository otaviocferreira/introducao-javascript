var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var linhaARemover = event.target.parentNode;

    linhaARemover.classList.add("fadeOut");

    setTimeout(function() {
        linhaARemover.remove();
    }, 400);
});