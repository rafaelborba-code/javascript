function calcularIdade(){
    let agora = new Date()
    let anoAtual = agora.getFullYear()
    let anoNasc = prompt("Ano de nascimento: ")
    let idade = anoAtual - Number(anoNasc)
    let texto = document.getElementById("texto")

    texto.innerHTML = `Quem nasceu em ${anoNasc} vai completar/completou <strong>${idade}</strong> anos em ${anoAtual}.`
}