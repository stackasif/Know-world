import axios from "axios";

const api = axios.create({
  baseURL: "https://countries.dev",
});

// get all
export const getMethod = () => {
  return api.get("/all?fields=name,capital,currencies,flags,region,population");
};

// get individual
export const getIndividualMethod = (name) => {
  return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
};