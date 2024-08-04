let numeroUsuario = 0;
let numeroMaximoPosible = 8;
//floor no redondea solo elimina la parte decimal 
//Math.random() aroja numeros aleatorio pero decimales
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;//el numero (+1) no ayuda a sumarle una al resultado 
//let veces = "vez";se remplaza por el operador ternario
let intentos = 1;
console.log(`numeroUsuario es: ${numeroUsuario}, tipo de dato ${typeof (numeroUsuario)}`);
console.log(`numeroSecreto es: ${numeroSecreto},tipo de dato ${typeof (numeroSecreto)}`);


while(numeroUsuario != numeroSecreto ){
    //parseInt nos sirve para convetir un numero en un entero.
    numeroUsuario = parseInt(prompt(`indica un numero del 1 al ${numeroMaximoPosible}`));

    if (numeroUsuario == numeroSecreto){
        alert(`bien el numero es: ${numeroSecreto}, numero de intentos ${intentos} ${intentos == 1 ? "vez": "veces"}`);
        //aveces = "vez"; se remplaza por el operador ternario
        intentos = 1;
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("el numero es menor");
        }else{alert("el numero es mayor");}
        //intentos = intentos + 1;
        //intentos +=1;
        //veces = "veces";rempalzado por el operador ternario
        intentos ++;
        //cantidad de intentos.
        if(intentos >= 10){
            alert(`llegaste al maximo de intentos que son: ${intentos} intentos`);
            break;
        }
    }
}
