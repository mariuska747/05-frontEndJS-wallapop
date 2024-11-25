export async function createUser(email, password){
    try{   
        const response = await fetch("http://localhost:8000/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: email,
                password
            }),
            headers:{
                "Content-type": "application/json"
            } 
        });
        if (!response.ok) {
            throw new Error("error creando usuario")
        }

    } catch (error) {
        throw new Error(`${error.status} error: ${error.message}`);
    }
}