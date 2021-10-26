const username= document.getElementById("username")
const contrasena= document.getElementById("contrasena")
const email= document.getElementById("email")
const respuestaDeSeguridad= document.getElementById("respuestaDeSeguridad")
const form_registro= document.getElementById("form_registro")
const parrafo=document.getElementById("warnings")

form_registro.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(username.value.length <=6){
        warnings+='Username corto, debe ser mayor o igual a seis dígitos<br>'
        entrar=true
    }
    if(contrasena.value.length <8){
        warnings+='Contraseña corta<br>'
        entrar=true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(respuestaDeSeguridad.value.length <3){
        warnings+='Respuesta de seguridad corta<br>'
        entrar=true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})