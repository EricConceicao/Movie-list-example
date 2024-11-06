import { useCallback, useEffect, useState } from "react";
import { fetchData, getConfig } from "../../utils/fetchData.js";

import { MovieCard } from "../../components/MovieCard";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { lightTheme } from "../../styles/themes/lightTheme.js";
import { darkTheme } from "../../styles/themes/darkTheme.js";
import { Container } from "./styles.js";
import { ButtonContainer } from "../../components/ButtonContainer";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../../components/Navbar/index.jsx";

function App() {
  // useState hooks //
  const [theme, setTheme] = useState(darkTheme);
  // Contains an array of movies organized to match the site
  const [moviesArray, setMoviesArray] = useState([]);
  // Controls the page number
  const [page, setPage] = useState(1);
  // Controls the filters for fetching
  const [filter, setFilter] = useState("popular");
  // Controls the input value to filter the movies
  //const [searchValue, setSearchValue] = useState("");

  // function to handle back and next button actions
  function handlePage(action) {
    switch (action) {
      case "next":
        setPage((prevPage) => prevPage + 1);
        handleFetch(page);
        break;

      case "back":
        setPage((prevPage) => prevPage - 1);
        handleFetch(page);
        break;

      default:
        console.error("ERROR: No action");
        break;
    }
  }

  // Fetch handler
  const handleFetch = useCallback(
    async (page) => {
      const [{ results: moviesData }] = await fetchData(
        `https://api.themoviedb.org/3/movie/${filter}?language=pt-br&page=${page}`,
        getConfig
      );

      setMoviesArray(moviesData);
    },
    [filter]
  );

  // Makes a fetch to the API on component mount.
  useEffect(() => {
    handleFetch(page);
  }, [handleFetch, page]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header>
          <NavBar>
            <Button
              disabledCondition={filter === "popular"}
              handleClick={() => setFilter("popular")}
            >
              Populares
            </Button>
            <Button
              disabledCondition={filter === "top_rated"}
              handleClick={() => setFilter("top_rated")}
            >
              Melhor Avaliados
            </Button>
            <Button
              disabledCondition={filter === "upcoming"}
              handleClick={() => setFilter("upcoming")}
            >
              Lançamentos
            </Button>
          </NavBar>

          <Button
            disabledCondition={false}
            handleClick={() => {
              theme == lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
            }}
          >
            Mudar tema
          </Button>
        </Header>

        <Container>
          <main>
            <section className="mt-3">
              <MovieCard moviesArray={moviesArray} />

              <ButtonContainer>
                <Button
                  disabledCondition={page == 1}
                  handleClick={() => handlePage("back")}
                >
                  Página anterior
                </Button>
                <Button
                  disabledCondition={false}
                  handleClick={() => handlePage("next")}
                >
                  Próxima página
                </Button>
              </ButtonContainer>
            </section>
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
