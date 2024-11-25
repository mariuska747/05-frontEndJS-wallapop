import { productDetailController } from "./product-detail/product-detail-controller.js";



document.addEventListener("DOMContentLoaded", ()=>{

    // obtener id del tweet de la url
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("id");

    const productDetailContainer = document.querySelector("#product-detail");

    productDetailController(productDetailContainer, productId);
})