import axios from "axios";

const api =axios.create({
    baseURL:"https://restcountries.com/v3.1",
})

// get method

export const getMethod=()=>{
    return api.get("/all?fields=name,capital,currencies,flags,region,population")
}

// get indivdual method

export const getIndividualMethod=(name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}


