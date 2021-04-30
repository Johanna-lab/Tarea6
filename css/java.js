function validausuario(){
    var usuario = document.getElementById("alias").value;
    var psw = document.getElementById("psw").value;
    var mensaje = document.getElementById("msgvalidacion");

    if((usuario=="Johanna") && (psw=="54321")){

        window.location="index2.html";
    }

    else{
        mensaje.innerText = "Usuario o Contraseña Incorrecta";
    } 
}

