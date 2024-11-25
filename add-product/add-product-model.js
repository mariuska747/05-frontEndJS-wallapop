

export async function createNewProduct(name, description, price, order){
    try {
        const token = localStorage.getItem('jwt');

        const response = await fetch("http://localhost:8000/api/products",{
            method: "POST",
            body: JSON.stringify({
                name, 
                description,
                price,
                order
            }),
            headers: {
                "Content-type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })

        if(!response.ok){
            throw new Error("Error creando tweet")
        }
        
    } catch (error) {
        throw new Error(`${error.status} error: ${error.message}`);
    }
    
}