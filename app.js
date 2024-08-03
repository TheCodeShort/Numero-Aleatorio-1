let numeroUsuario = 0;
let numeroMaximoPosible = 20;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;

//let veces = "vez";
let intentos = 1;
console.log(numeroSecreto);
console.log(numeroUsuario);
alert("hola, vuelvelo a intentar");

while(numeroUsuario != numeroSecreto ){
    //parseInt nos sirve para convetir un numero en un entero.
    numeroUsuario = parseInt(prompt(`indica un numero del 1 al ${numeroMaximoPosible}`));
    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto){
        alert(`bien echo el numero es: ${numeroSecreto}, numero de intentos ${intentos} ${intentos == 1 ? "vez": "veces"}`);
        //eces = "vez";
        intentos = 1;
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("el numero es menor");
        }else{alert("el numero es mayor");}
        //intentos = intentos + 1;
        //intentos +=1;
        //veces = "veces";
        intentos ++;
        //cantidad de intentos.
        if(intentos >= 10){
            alert(`llegaste al maximo de intentos que son: ${intentos} intentos`);
            break;
        }
    }
}
