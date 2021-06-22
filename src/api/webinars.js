import { baseUrl } from "./config";

export const fetchList = () => {
    return fetch(`${baseUrl}/posts?per_page=12&page=1`,{
        method: "GET",
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}