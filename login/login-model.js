export async function loginUser(email, password){
  try {
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password
      }),
      headers: {
        "Content-type": "application/json"  
      }
    });
  
    if (!response.ok) {
      throw new Error("error iniciando sesión")
    }
    
    const { accessToken } = await response.json();
  
    return accessToken;

  } catch (error) {
    throw new Error(`${error.status} error: ${error.message}`);
  }
  
}
