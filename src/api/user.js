import { baseUrl } from "./config";

export const loginUser = (data) => {
    return fetch(`${baseUrl}/auth/email/login`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}

export const logoutUser = (token) => {
    const fullToken = `Bearer ${token}`;
    return fetch(`${baseUrl}/auth/logout`,{
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': fullToken
        },
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}