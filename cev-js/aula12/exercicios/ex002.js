function verificar() {
    let agora = new Date()
    let anoAtual = agora.getFullYear()
    let anoNascimento = document.getElementById("anoNascimento")
    let idade = anoAtual - Number(anoNascimento.value)

    let masculino = document.getElementById("masc")
    let feminino = document.getElementById("fem")
    let sexo = ""

    let imagem = document.getElementById("imagem")
    let texto = document.querySelector("div#dados>p")

    if (masculino.checked) {
        sexo = "Homem"
    } else {
        sexo = "Mulher"
    }

    texto.textContent = `Você é ${sexo} e tem ${idade} anos`

    if (sexo == "Homem"){
        if (idade < 5){
            imagem.alt = "bebê menino"
        } else if (idade >= 5 && idade < 16){
            imagem.alt = "criança menino"
        } else if (idade >= 16 && idade < 30){
            imagem.alt = "jovem menino"
        } else if (idade >= 30 && idade < 60){
            imagem.alt = "homem adulto"
        } else {
            imagem.alt = "homem idoso"
        }
        
    } else if (sexo == "Mulher") {
        if (idade < 5){
            imagem.alt = "bebê menina"
        } else if (idade >= 5 && idade < 16){
            imagem.alt = "criança menina"
        } else if (idade >= 16 && idade < 30){
            imagem.alt = "jovem menina"
        } else if (idade >= 30 && idade < 60){
            imagem.alt = "mulher adulta"
        } else {
            imagem.alt = "mulher idosa"
        }
    }
}