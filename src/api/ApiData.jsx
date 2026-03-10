import axios from "axios";

const api =axios.create({
    baseURL:"https://restcountries.com/v3.1",
})

// get method

export const getMethod=()=>{
    return api.get("/all?fields=name,capital,currencies")
}



