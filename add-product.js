import { createProductController } from "./add-product/add-product-controller.js";
import { isUserLoggedIn } from "./utils/auth.js";

if(!isUserLoggedIn()){
    window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", ()=>{
    const addProductForm = document.querySelector('form');

    createProductController(addProductForm);
})