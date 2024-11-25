import { REGEXP } from "../utils/constants.js";
import { loginUser } from "./login-model.js";

export function loginController(loginForm) {
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const userEmailElement = loginForm.querySelector("#user-mail");
    const passwordElement = loginForm.querySelector("#password");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    
    try {
      // 2- validar el mail
      const emailRegExp = new RegExp(REGEXP.mail);
      if (!emailRegExp.test(userEmail)) {
        throw new Error('formato de mail incorrecto')
      } else {
        handleLoginUser(userEmail, password)
      }
    } catch (error) {
      const paragraph = document.createElement("h2");
      paragraph.innerHTML = `${error}`;
      errorHtmlNode.appendChild(paragraph); 
    }
    

  })
}

async function handleLoginUser(userEmail, password) {
  const token = await loginUser(userEmail, password);

  localStorage.setItem("jwt", token);
  alert("Login correcto")
  window.location.href = "/"
}
