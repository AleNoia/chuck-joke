// ANCHOR Imports
import { useState, useEffect } from "react";
import axios from "../../services/axios";

// ANCHOR Hook
// Hook criada para usar o axios dinamicamente
export default function useAxio(url) {
  const [response, setReponse] = useState({
    data: null,
    loading: true,
  });

  // Setando dados que são recebido e verificando se está ou não carregando
  useEffect(() => {
    axios.get(url).then((resp) =>
      setReponse({
        data: resp.data.value,
        loading: false,
      })
    );
  }, [url]);

  return response;
}
