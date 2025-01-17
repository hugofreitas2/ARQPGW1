document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        let isValid = true;
        let errorMessage = "";

        const nome = document.getElementById("nome").value;
        document.cookie = "nome";
        if (!nome) {
            isValid = false;
            errorMessage += "Insira seu Nome\n";
        }

        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailPattern.test(email)) {
            isValid = false;
            errorMessage += "Email Inválido\n";
        }

        const telefone = document.getElementById("telefone").value;
        const telefonePattern = /^\(?\d{2}\)?\d{8,9}$/;
        if (!telefone || !telefonePattern.test(telefone)) {
            isValid = false;
            errorMessage += "Telefone Inválido\n";
        }

        const jogadores = document.querySelectorAll('input[name="jogador"]:checked');
        if (jogadores.length === 0) {
            isValid = false;
            errorMessage += "Escolha ao Menos 1 Jogador\n";
        }

        const jogadorRadio = document.querySelector('input[name="jogador"]:checked');
        if (!jogadorRadio) {
            isValid = false;
            errorMessage += "Escolha o jogador que mais jogou pelo Palmeiras\n";
        }

        if (!isValid) {
            alert("Erros encontrados:\n" + errorMessage);
            event.preventDefault();
        } else {
            event.preventDefault(); 
            alert("Formulário enviado com sucesso!"); 
            form.reset();
        }
    });
});

