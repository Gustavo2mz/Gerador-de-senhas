/* Let cria uma caixa e doc.query da um nome a ela */
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novasenha = "";

// Mostra o valor inicial do slider
sizePassword.innerHTML = sliderElement.value;

// Atualiza o valor de sizePassword quando o slider é movido
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatepassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    novasenha = pass;  // Aqui você armazena a senha gerada em novasenha
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword(){
    alert("Sua senha foi copiada com sucesso!")
    navigator.clipboard.writeText(novasenha);
}