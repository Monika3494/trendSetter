async function login(email, password) {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.error) {
        alert(data.error);
        return false
    }
    return response.ok;
}

async function register(email, password) {
    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.error) {
        alert(data.error);
        return false
    }
    return response.ok;
}


export { login, register };