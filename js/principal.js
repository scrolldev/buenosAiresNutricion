var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function() {
    console.log("Usted hizo clic en el titulo");
});

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = true;
    alturaEsValida = true;
 
    if((peso < 0) || (peso > 1000)) {
        console.log("Peso es incorrecto");
        tdIMC.textContent = "Peso es incorrectos";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
   
    if((altura < 0) || (altura > 3.00)) {
        console.log("Altura es incorrecto");
        tdIMC.textContent = "Altura es incorrectos";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }
}



