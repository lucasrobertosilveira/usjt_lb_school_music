import axios from "axios"

const instrumentoAPI = axios.create({baseURL: "http://localhost:3000/instrumentos"})

async function getInstrumentos() {
    const response = await instrumentoAPI.get('/')

    return response.data
}

export {
    getInstrumentos
}