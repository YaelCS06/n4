function verificarRespuesta(){
    var total = 5;
    var puntos = 0;

    var myForm = document.forms["quizForm"];
    var respuestas = ["a","a","a","a","a"];

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
    var rest = document.getElementById("resultado");
    rest.innerHTML = "Tu resultado fue: "+puntos;
    window.alert(puntos);
    return false;
}