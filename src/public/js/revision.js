function verificarRespuesta(){
    var total = 80;
    var puntos = 0;
    var rest = document.getElementById("resultado");
    var myForm = document.forms["quizForm"];
    var respuestas = ["a","a","c","c","c","b","c","b","b","c","a","b","b","c","c","b","b","a","c","d","c","a","a","a","a","d","d","d","a","a","a","c","b","c","c","a","c","b","c","b","a","b","c","c","d","c","b","c","c","b","a","a","b","c","b","a","d","a","d","c","b","d","a","c","d","b","c","d","b","a","a","a","b","a","b","c","c","c","a","b" ];

    for(var i = 1; i <= total; i ++){
        if(myForm["p" + i].value === null || myForm["p"+i].value === ""){
            alert("Por favor responde la pregunta " + i);
            return false;
        }else{
            if(myForm["p"+i].value ===respuestas[i-1]){
                puntos ++ ;
            }
        }
    }
    
    rest.innerHTML = "Tu resultado fue: "+puntos;
    window.alert(puntos);
    return false;
}