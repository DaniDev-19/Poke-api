import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";

export const getPokemonList = async (limit = 20, offset = 0) => {
  const response = await axios.get(
    `${BaseUrl}pokemon?limit=${limit}&offset=${offset}`,
  );
  return response.data;
};

export const getPokemonDetail = async (idOrName: string | number) => {
  const response = await axios.get(`${BaseUrl}pokemon/${idOrName}`);
  return response.data;
};
