// ANCHOR Imports
import useApi from "../../hooks/useApi";
// import {} from "./styled";

// ANCHOR Component
export default function CardJoke() {
  const response = useApi();

  // Substituindo &quot por caractere espeical
  function replaceSpecialCharacter(joke) {
    return joke.replace(/&quot;/g, '"');
  }

  // Component
  return (
    <div>
      <p>
        Joke:
        {!response.loading
          ? replaceSpecialCharacter(response.data.joke)
          : false}
      </p>
      <p>
        Categoria:
        {!response.loading ? response.data.categories : false}
      </p>
    </div>
  );
}
