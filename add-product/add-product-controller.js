import { createNewProduct } from "./add-product-model.js";

export function createProductController(formProductCreation){

    formProductCreation.addEventListener("submit", (event)=>{
        event.preventDefault()

        const name = formProductCreation.querySelector("#name").value;
        const price = formProductCreation.querySelector("#price").value;
        const description = formProductCreation.querySelector("#description").value;
        const order = formProductCreation.querySelector('input[name="option"]:checked').value;

        handleProductCreation(
            name, 
            description,
            price,
            order
        )
    })
}

async function handleProductCreation(name, description, price, order){
    try {
        await createNewProduct(name, description, price, order)
        alert("Producto creado")
        window.location.href = "/"
    } catch (error) {
        alert(error.message)
    }
}