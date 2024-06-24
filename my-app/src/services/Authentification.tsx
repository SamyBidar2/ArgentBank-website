
export const login =  async (email, password) => {

    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email, password})
    });

    const result = await response.json();
    console.log(result);
    
    if (result.body && result.body.token) {
      const token = result.body.token;
      localStorage.setItem('Token', token);
      console.log('Token:', token); 
      return result;
        

    } else {
      console.log(result.message);
      throw new Error(result.message || 'Login failed');
    }
  };

  
  