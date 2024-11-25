import { getCurrentUserInfo } from "../auth/auth-model.js";
import { getProduct, removeProduct } from "./product-detail-model.js";
import { paintdDeleteButton, paintProductsDetail } from "./product-detail-view.js";



export async function productDetailController(productDetailContainer, productId){

    try {
        
        const product = await getProduct(productId);
        const user = await getCurrentUserInfo();

        productDetailContainer = paintProductsDetail(product)

        if (user.id === product.user.id) {
            const removeButtonNode = paintdDeleteButton();
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