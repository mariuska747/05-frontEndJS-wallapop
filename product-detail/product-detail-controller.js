import { getCurrentUserInfo } from "../auth/auth-model.js";
import { customErrorEvent, toggleElement } from "../custom-events.js";
import { getProduct, removeProduct } from "./product-detail-model.js";
import { paintdDeleteButton, paintProductDetail } from "./product-detail-view.js";



export async function productDetailController(productDetailNode, productId){
    try {
            const spinner = document.querySelector(".spinner")
            // mostrado de detalle de producto:
            toggleElement(spinner,'hidden')
            const product = await getProduct(productId);
            try {           
                productDetailNode.innerHTML = paintProductDetail(product)
            } catch (error) {
                const notificationsNode = document.querySelector("#notifications")
                customErrorEvent("loading-products-error", error, notificationsNode);           
            }finally{
                toggleElement(spinner,'hidden')
            } 
            
            // borrado del producto:
            const user = await getCurrentUserInfo();
        
            if (user.id === product.userId) {
                const removeButtonNode = paintdDeleteButton();
                productDetailNode.appendChild(removeButtonNode);
                removeButtonNode.addEventListener("click", async ()=>{
                    const question = confirm('¿Seguro que quieres borrar el producto?');
                    if(question){
                        await removeProduct(product.id);
                        alert("Producto eliminado")
                        window.location.href = "/"
                    }
                })
            }

        } catch (error) {

            alert(error.message)
            window.location.href = "/"
        
    }
}