function verificarRespuesta(){
    var total = 79;
    var puntos = 0;
    var myForm = document.forms["form"];
    var arreglo = [];
    var respuestas = ["a","a","c","c","c","b","c","b","b","c","a","b","b","c","c","b","b","a","c","d","c","a","a","a","a","d","d","d","a","a","a","c","b","c","c","a","c","b","c","b","a","b","c","c","d","c","b","c","c","b","a","a","b","c","b","a","d","a","d","c","b","d","a","c","d","b","c","d","b","a","a","a","b","a","b","c","c","c","a","b"];


    for(var i = 1; i <= myForm.length; i ++){
        
        if(myForm[i-1].value ===respuestas[i-1]){
                puntos ++;
            }
            if(i==10||i==20||i==30||i==40||i==50||i==60||i==70||i==79){
                arreglo.push(puntos);
            }
    }
    var r1 = arreglo[0];
    var r2 = arreglo[1]-r1;
    var r3 = arreglo[2]-(r2+r1);
    var r4 = arreglo[3]-(r3+r2+r1);
    var r5 = arreglo[4]-(r4+r3+r2+r1);
    var r6 = arreglo[5]-(r5+r4+r3+r2+r1);
    var r7 = arreglo[6]-(r6+r5+r4+r3+r2+r1);
    var r8 = arreglo[7]-(r7+r6+r5+r4+r3+r2+r1);
    
    document.getElementById("cuadrito").value = puntos;
    document.getElementById("matematicas").value = r1;
    document.getElementById("espa").value = r2;
    document.getElementById("biologia").value = r3;
    document.getElementById("fisica").value = r4;
    document.getElementById("quimica").value = r5;
    document.getElementById("historia").value = r6;
    document.getElementById("geografia").value = r7;
    document.getElementById("formacion").value = r8;
    document.rexam.submit();
}
function verificarRespuestaCu(){
    var total = 10;
    var puntos = 0;
    var myForm = document.forms["quizForm"];
    var respuestas = ["d","c","c","b","a","c","d","d","c","d"];

    for(var i = 1; i <= total; i ++){
        if(myForm["p" + i].value === null || myForm["p"+i].value === ""){
            swal("Por favor responde la pregunta " + i);
            return false;
        }else{
            if(myForm["p"+i].value ===respuestas[i-1]){
                puntos ++ ;
            }
        }
    }
    document.getElementById("cuadrito").value = puntos;
    swal("Tu resultado es : "+ puntos);
    document.rcuest.submit();
}