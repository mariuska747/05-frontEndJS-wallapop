import { getCurrentUserInfo } from "../auth/auth-model.js";
import { getProduct, removeProduct } from "./product-detail-model.js";
import { paintdDeleteButton, paintProductDetail } from "./product-detail-view.js";



export async function productDetailController(productDetailNode, productId){

    try {
        
        const product = await getProduct(productId);
        const user = await getCurrentUserInfo();

        productDetailNode.innerHTML = paintProductDetail(product)

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