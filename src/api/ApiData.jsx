import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// Get all countries
export const getMethod = () => {
  return api.get(
    "/all?fields=name,capital,currencies,flags,region,population"
  );
};

// Get individual country
export const getIndividualMethod = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
