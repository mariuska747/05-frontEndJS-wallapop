export async function getProducts(){
    try {
        
        const response = await fetch("http://localhost:8000/api/products?_expand=user");
        const products = await response.json();

        if(!response.ok){
            throw new Error("La conexión ha fallado");
        }

        return products;

    } catch (error) {
        throw new Error(`${error.status} error: ${error.message}`);
    }

} 

/*
export async function getProducts() {
    // Simulando productos con un delay como si vinieran de una API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "Bicicleta de montaña",
            description: "Una bicicleta perfecta para senderos y terrenos difíciles.",
            price: 250,
            order: "venta",
          },
          {
            name: "Teléfono móvil",
            description: "Smartphone de última generación con pantalla OLED.",
            price: 799,
            order: "venta",
          },
          {
            name: "Libro de JavaScript",
            description: "Aprende JavaScript desde cero con este libro ilustrado.",
            price: 20,
            order: "intercambio",
          },
        ]);
      }, 1000); // Simula un retraso de 1 segundo
    });
  }
  */