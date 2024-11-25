export function paintProductDetail(product){
    const createdAt = new Date(product.updatedAt);
    return `
    <div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>${product.price} €</p>
    <p>Operación: ${product.order}</p>
    <p>Creación: ${createdAt.toLocaleDateString()}</p>
    </div>
    `
  }
  
  export function paintdDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar tweet";
  
    return removeButton;
  }