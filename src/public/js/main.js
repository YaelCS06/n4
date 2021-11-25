function validarn(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if(teclado == 8)return true;
    if(teclado == 32)return true;
    var patron = /[A-z]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validar(){
    var expr = /^[A-Za-z]?$/;
    var nombre = document.getElementById("Nombre");
    var Ap_pat = document.getElementById("Ap_pat");
    var Ap_mat = document.getElementById("Ap_mat");
    var valido1 = expr.test(nombre);
    var valido2 = expr.test(Ap_pat);
    var valido3 = expr.test(Ap_mat);
    if(valido1==true){
        if(valido2==true){
            if(valido3==true){
                validarEmail(document.getElementById("correo"));
            }else{
                document.getElementById("nombre").value = "";
                document.getElementById("Ap_pat").value = "";
                document.getElementById("Ap_mat").value = "";
                swal("Datos no validos");
            }
        }else{
            document.getElementById("nombre").value = "";
                document.getElementById("Ap_pat").value = "";
                document.getElementById("Ap_mat").value = "";
                swal("Datos no validos");
        }
    }else{
        document.getElementById("nombre").value = "";
        document.getElementById("Ap_pat").value = "";
        document.getElementById("Ap_mat").value = "";
        swal("Datos no validos");
            
        
    }
}

function validarEmail(valor) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(valor);
    if(valido==true){
        validarusaps();
    }else{
        swal("correo no valido");
        document.getElementById("correo").value = "";
    }
  }

function validarusaps(){
    var expr = /^[A-Za-z]?$/;
    var usuario = document.getElementById("username");
    var contra = document.getElementById("password");
    var uval = expr.test(usuario);
    if(uval==true){
        if(contra.lengt()==0){
            swal("Contraseña no valida");
            document.getElementById("password").value = "";    
        }
    }else{
        swal("Usuario no valido");
        document.getElementById("username").value = "";
        
    }   
}