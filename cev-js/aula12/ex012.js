let agora = new Date();
let hora = 1;

console.log(`Agora são ${hora} horas.`);

if (hora >= 5 && hora < 13) {
    console.log("Bom dia!");
} else if (hora < 18 && hora >= 13) {
    console.log("Boa tarde!");
} else if (hora <= 23 && hora >= 18) {
    console.log("Boa noite!");
} else {
    console.log("Boa madrugada!");
}
