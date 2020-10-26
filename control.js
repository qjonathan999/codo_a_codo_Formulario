window.onload=function(){
    
    let formulario=document.getElementById("formulario");
    let fusuario=document.getElementById("usuario");
    let fclave=document.getElementById("clave");

    formulario.onsubmit=function(e){
        const caracter_valido="@";

        if(fusuario.value==="" || fclave.value===""){
            window.alert("Por favor ingrese usuario y clave");
            e.preventDefault();
        }
        else{
            if(fusuario.value.indexOf(caracter_valido)===-1){
                window.alert("El usuario debe contener el caracter '@'");
                e.preventDefault();
            }
            else{
                document.write("Bienvenido");
            }
        }

    }

}