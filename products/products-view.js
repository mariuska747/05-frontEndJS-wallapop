export function paintProducts(product){
  const productElement = document.createElement("a")
  productElement.setAttribute("href", `/product-detail.html?id=${product.id}`);
  const createdAt = new Date(product.updatedAt)
 
  productElement.innerHTML = `
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <p>${product.price} €</p>
  <p>Operación: ${product.order}</p>
  <p>Creación: ${createdAt.toLocaleDateString()}</p>
  `

  return productElement;
}


export function paintEmptyProductsList(){
  return "<h2>No hay productos disponibles</h2>"
}