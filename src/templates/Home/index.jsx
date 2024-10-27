import { useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard";
import { SearchBar } from "../../components/SearchBar";
import { fetchMoviesData } from "../../utils/fetchData";
import { Button } from "../../components/Button";

function App() {
  // useState hooks //

  // Contains an array of movies organized to match the site
  const [moviesArray, setMoviesArray] = useState([]);
  // Controls how many movies will load on screen for the map function
  const [moviesOnScreen, setMoviesOnScreen] = useState([]);
  // Controls the page for the pagination
  const [page, setPage] = useState(0);
  // Controls how many movies the page will have
  const [moviesPerPage] = useState(10);
  // Controls the input value to filter the movies
  const [searchValue, setSearchValue] = useState("");

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
  async function handleFetch() {
    const moviesData = await fetchMoviesData();
    setMoviesArray(moviesData);

    // Using slice to limit how many movies will display on the page, based on moviesPerPage hook.
    setMoviesOnScreen(moviesData.slice(page, moviesPerPage));
  }

  // Makes a fetch to the API on component mount.
  useEffect(() => {
    handleFetch();
  }, []);

  // Input handler for Searchbar
  function handleChange(input) {
    setSearchValue(input);
  }

  // This filters the movies when the user inputs a movie's name in the search bar, by the movie title.
  const filteredMovies = searchValue
    ? moviesArray.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : moviesOnScreen;

  return (
    <>
      <header className="text-light p-3 text-uppercase bg-primary">
        <h1>Lista de filmes atualizada sem vírus 2024 gratis</h1>
      </header>

      <SearchBar
        placeholder="Digite aqui..."
        onChange={handleChange}
        title="Pesquisar"
        ariaLabel="Digite aqui para pesquisar um filme"
      />
      <main>
        <section className="mt-3">
          <MovieCard filteredMovies={filteredMovies} />

          <div className="row gap-1 my-1 justify-content-center">
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
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
