import { useCallback, useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard/index.jsx";
import { fetchData } from "../../utils/fetchData.js";
import { Button } from "../../components/Button/index.jsx";

import GlobalStyles from "../../styles/globalStyles.js";
import { lightTheme } from "../../styles/themes/lightTheme.js";
import { darkTheme } from "../../styles/themes/darkTheme.js";
import { Background } from "./styles.js";
import { ButtonContainer } from "../../components/ButtonContainer/index.jsx";
import { ThemeProvider } from "styled-components";

function App() {
  // useState hooks //
  const [theme, setTheme] = useState(darkTheme);
  // Contains an array of movies organized to match the site
  const [moviesArray, setMoviesArray] = useState([]);
  // Controls how many movies will load on screen for the map function
  const [moviesOnScreen, setMoviesOnScreen] = useState([]);
  // Controls the page for the pagination
  const [page, setPage] = useState(0);
  // Controls how many movies the page will have
  const [moviesPerPage] = useState(10);
  // Controls the input value to filter the movies
  //const [searchValue, setSearchValue] = useState("");

  // function to handle back and next button actions
  function handlePage(action) {
    let nextPage = null;
    let nextMovies = null;

    switch (action) {
      case "next":
        nextPage = moviesPerPage + page;
        nextMovies = moviesArray.slice(nextPage, moviesPerPage + nextPage);
        break;

      case "back":
        nextPage = page - moviesPerPage;
        nextMovies = moviesArray.slice(nextPage, moviesPerPage + nextPage);
        break;

      default:
        console.error("ERROR: No action");
        break;
    }
    setMoviesOnScreen(nextMovies);
    setPage(nextPage);
  }

  // Fetch handler
  const handleFetch = useCallback(async (page, moviesPerPage) => {
    const [{ results: moviesData }] = await fetchData(
      "https://api.themoviedb.org/3/discover/movie?language=pt-BR",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2IwMDE0YWIxZTJhYjUzMzA3ODkxOGM2MjE0OTNiMSIsIm5iZiI6MTczMDI5MjI2MS41ODgyODg1LCJzdWIiOiI2NzIyMWRhYTE2MDE0MTlmNzM2MWQ1ZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LnNwmYGJPb_G67ShKqjIbpSoj4jFna_bTJK4_9b95Ng",
        },
      }
    );

    setMoviesArray(moviesData);
    // Using slice to limit how many movies will display on the page, based on moviesPerPage hook.
    setMoviesOnScreen(moviesData.slice(page, moviesPerPage));
  }, []);

  // Makes a fetch to the API on component mount.
  useEffect(() => {
    handleFetch(0, moviesPerPage);
  }, [handleFetch, moviesPerPage]);

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <GlobalStyles />
        <Button
          disabledCondition={false}
          handleClick={() => {
            theme == lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
          }}
        >
          Mudar tema
        </Button>
        <header>
          <h1>Lista de filmes atualizada</h1>
        </header>

        <main>
          <section className="mt-3">
            <MovieCard moviesArray={moviesOnScreen} />

            <ButtonContainer>
              <Button
                disabledCondition={page == 0}
                handleClick={() => handlePage("back")}
              >
                Página anterior
              </Button>
              <Button
                disabledCondition={page + moviesPerPage >= moviesArray.length}
                handleClick={() => handlePage("next")}
              >
                Próxima página
              </Button>
            </ButtonContainer>
          </section>
        </main>

        <footer className="bg-secondary p-4 text-end mt-4">
          <p className="p-0 m-0">
            MovieList 2024. Todos os direitos reservados{" "}
            <span className="text-light">&copy;</span>
          </p>
        </footer>
      </Background>
    </ThemeProvider>
  );
}

export default App;
