// ANCHOR Imports
import { useContext } from "react";
import { AppContext } from "../store";
import useAxios from "./useAxios";

// ANCHOR Hook
// Hook criado para consumir os dados da API dinamicamente
export default function useApi() {
  const {
    state: { firstName, lastName, jokeCategory },
  } = useContext(AppContext);

  // Verficando se será necessário mudar o nome do personagem da piada
  function hasName(name) {
    if (name !== `${firstName}` || name !== " ") {
      return `?firstName=${name}&lastName=${lastName}`;
    }
    return ``;
  }

  // Excluindo piadas de acordo com a categoria
  function excludeCategory(exclude) {
    if (exclude === 3) return `?exclude=[explicit]`;
    if (exclude === 0) return ``;
    return ``;
  }

  // Se não houver exclusão de categorias, será possível mudar o nome
  function hasNameOrExclude(exclude, name) {
    if (excludeCategory(exclude) === ``) {
      return hasName(name);
    }
    return ``;
  }

  // URL que será gerada dinamicamente
  const url = `/jokes/random${excludeCategory(jokeCategory)}${hasNameOrExclude(
    jokeCategory,
    firstName
  )}`;
  // console.log(url);

  // Consumindo dados da API
  const response = useAxios(url);
  return response;
}
