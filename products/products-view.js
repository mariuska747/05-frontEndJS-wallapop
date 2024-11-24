export function paintProducts(product){
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


export function paintEmptyProductsList(){
  return "<h2>No hay productos disponibles</h2>"
}