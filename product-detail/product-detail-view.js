export function paintProductsDetail(product){
    const productElement = document.createElement("div")
    const date = new Date()
   
    productElement.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>${product.price} €</p>
    <p>Operación: ${product.order}</p>
    <p>Creación: ${date.toLocaleDateString()}</p>
    `
  
    return productElement;
  }
  
  export function paintdDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar tweet";
  
    return removeButton;
  }