import { customErrorEvent } from "../custom-events.js";
import { createUser } from "./signup-model.js";


export function signUpController(form){

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const userEmail = form.querySelector("#user-mail").value;
        const password = form.querySelector("#password").value;
        const passwordConfirm  = form.querySelector("#password-confirm").value;
      
        const errors = []
        const errorHtmlNode = document.querySelector("#errors")
        errorHtmlNode.innerHTML = '';

        try {  
            // validamos
            const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (!emailRegExp.test(userEmail)) {
                throw new Error("formato de mail incorrecto")
            }

            if (password !== passwordConfirm) {
                throw new Error("las passwords no sin iguales")
            }

       } catch (error) {
            // gestión de errores
            errors.push(error)
            //customErrorEvent("loading-products-error", error, errorHtmlNode)     
                
            for (const error of errors) {         
                const paragraph = document.createElement("h2");
                paragraph.innerHTML = `${error}`;
                errorHtmlNode.appendChild(paragraph); 
            }
        }
        // si no hay errores:
        if (errors.length === 0) {
            handleCreateUser(userEmail, password)
        }        
    })
}

async function handleCreateUser(userEmail, password) {
    // consumir sparrest para crear el usuario
    try {
        await createUser(userEmail, password)
        alert("Usuario creado")
        window.location.href = "/";
    } catch (error) {
        alert(error.message)
    }
  }
