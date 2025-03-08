function clique(btn){
    let paragrafo = document.createElement("p")
    let conjunto = document.getElementById("texto")
    
    paragrafo.textContent = `Clicou no ${btn} botão`
    conjunto.appendChild(paragrafo)
}