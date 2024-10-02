let nome = "Gisele Sousa Santana"
let idade = 26;
let endereco = "Rua de Deus, nº 206, Paripe";
let contatos = "(71) 9 8657-4980 | (71) 9 8381-8803"
let email = "gisy.ccb@gmail.com"
function mostrarResultado() {
    // Imprimindo na tela e indicando que é um texto
    // pode ser realizado dessa forma ou com template Literals
    document.getElementById("info").innerHTML =
        "Idade: " + idade + "<br>" +
        "Endereço : " + endereco + "<br>" +
        "Contatos: " + contatos + "<br>" +
        "Email: " + email;
}