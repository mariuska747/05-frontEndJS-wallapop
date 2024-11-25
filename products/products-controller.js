import { customErrorEvent, toggleElement } from "../custom-events.js";
import { getProducts } from "./products-model.js";
import { paintEmptyProductsList, paintProducts } from "./products-view.js";

//refactorizamos
function drawProducts(products, productHmlElement){
    if(!products.length){
        productHmlElement.innerHTML = paintEmptyProductsList();
    }else{
        products.forEach(element => {
            const newProduct = paintProducts(element);
            productHmlElement.appendChild(newProduct);
        });
    }   
}

export async function productsController(productHmlElement){
        
        productHmlElement.innerHTML = ""
    
        const spinner = document.querySelector(".spinner")
    
        toggleElement(spinner,'hidden')
        try {
            const products = await getProducts();
            drawProducts(products, productHmlElement)
        } catch (error) {
            customErrorEvent("loading-products-error", error, productHmlElement);           
        }finally{
            toggleElement(spinner,'hidden')
        }    
}