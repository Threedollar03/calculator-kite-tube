

// transformar grão em grama
const valor = 15.4; //valor de divisão
let spine300 = 8.44;
let spine400 = 6.95;
let spine500 = 5.96; // peso em grains de cada tub
let spine600 = 5.71;
let spine700 = 4.96;
let spine800 = 4.47;
let tamanhoDoTubo = 32; //tamanho em polegadas
const pesoEmGramas = (spine400 * tamanhoDoTubo) / valor;
console.log("O tubo de carbono pesa:", pesoEmGramas, "gramas");

// transformando o tamanho do tubo em cm
const valor2 = 2.54; //valor de divisão
let tamanhoDoTuboEmCm = tamanhoDoTubo * valor2;
console.log("O tamanho do tubo em CM é:",tamanhoDoTuboEmCm,"e em polegadas é:",
tamanhoDoTubo);

// gramas por cm
let pesoPorCm = pesoEmGramas / tamanhoDoTuboEmCm;
console.log("o peso por cm deste tubo é:", pesoPorCm, "gramas.");





function calculaTuboIdeal(){
    
const seletor = document.querySelector("#spine");

const calcular = document.querySelector(".button");

const valor = 15.4; //valor de divisão
const valor2 = 2.54; //valor de divisão






calcular.addEventListener("click", function(){
        // transformando o tamanho do tubo em cm

    const pesoEmGramas = (parseFloat(seletor.value) * 31) /valor ;
    
    if(pesoEmGramas < 10.5){
        alert(`O peso em gramas por tubo é ${pesoEmGramas.toFixed(2)} , ideal para uma quad Ultra-light`)
    } else if(pesoEmGramas < 12.5){ // Reorganizei as condições aqui
        alert(`O peso em gramas por tubo é ${pesoEmGramas.toFixed(2)} , ideal para uma quad Standard`)
    } else if(pesoEmGramas < 15.5){ // e aqui
        alert(`O peso em gramas por tubo é ${pesoEmGramas.toFixed(2)} , ideal para uma quad Semi-ventilada ou Ventilada`)
    } else { // Alterei para else, já que se nenhuma das condições anteriores for atendida, será maior que 16
        alert(`O peso em gramas por tubo é ${pesoEmGramas.toFixed(2)} , ideal para uma quad Super-Ventilada`)
    }

})

}

calculaTuboIdeal()