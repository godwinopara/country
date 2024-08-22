import axios from "axios";
import { Country } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
  const response = await axios.get<Country[]>(`${BASE_URL}/all`);
  const data = response.data;
  return data;
};

export const fetchCountry = async (fullname: string) => {
  const response = await axios.get<Country>(`${BASE_URL}/name/${fullname}?fullText=true`);
  const data = response.data;
  return data;
};
