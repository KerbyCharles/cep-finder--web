const cep = document.getElementById("cep");
const form = document.getElementById("form");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade"); 
const estado = document.getElementById("estado");

const message = document.getElementById("mensagem") 


cep.addEventListener("input", function(){
    logradouro.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
})

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const valorCep = cep.value.replace(/\D/g, "");
    if (valorCep.length !== 8){
        alert("Digite um CEP válido. ");
        return
    }

    try {
        
    const resposta = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`

    );
    
    const dados = await resposta.json();
    if (dados .erro){
        alert("CEP não encontrado. ")
        return;
    }
    

    logradouro.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;

    message.textContent ="CEP encontrado com sucesso";
    message.style.color = "green";

} catch (erro){
    alert("Não foi possivel consultar o cep tente novamente. ")
}

});