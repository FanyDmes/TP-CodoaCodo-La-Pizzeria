
const usuario = document.getElementById("usuario")
const email= document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo= document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(usuario.value.length <6){
        warnings += `El usuario no es válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(contraseña.value.length <4){
        if (contraseña.value.length<4)
        warnings += `El contraseña no es válida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
     }else{
        parrafo.innerHTML = "Iniciaste Sesión"
     }
})