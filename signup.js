import { signUpController } from "./signup/signup-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const signUpHtmlNode = document.querySelector("form");
    const notifHtmlNode = document.querySelector("#errors")
    
    signUpController(signUpHtmlNode);
    const { showNotification } = notificationController(notifHtmlNode); 

    notifHtmlNode.addEventListener("loading-products-error", (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
})