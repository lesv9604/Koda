const username= document.getElementById("username")
const contrasena= document.getElementById("contrasena")
const form_login= document.getElementById("form_login")
const parrafo=document.getElementById("warnings")

form_login.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(!regexEmail.test(username.value)){
        warnings += `El correo no es correcto<br>`
        entrar = true
    }
    if(contrasena.value.length <8){
        warnings+='Contraseña incorrecta<br>'
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})