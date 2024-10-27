import "./styles.css";

// This component mounts the movie card from the given array in the props.
// It maps through the data for the movie title, photo, year, cast and synopsis
// The cast is a map function too
export const MovieCard = ({ filteredMovies }) => {
  return (
    <div id="cards-container">
      {filteredMovies?.map((movie) => (
        <article
          id="movie-card"
          key={movie.id}
          className="border border-1 border-dark rounded p-2 mb-3"
        >
          <header>
            <h2 className="fs-5">
              <strong>Nome do filme</strong> <br />
              {movie.title}
            </h2>
          </header>

          <section>
            <figure>
              <img
                width="100%"
                alt={`imagem do filme: ${movie.title}`}
                src={movie.photoUrl}
              />
            </figure>
            <p>
              <strong>Lançamento:</strong> {movie.date}
              <br />
              <strong>Sinopse:</strong> {movie.body}
            </p>
          </section>
          <section className="border-top border-1 border-dark">
            <h2 className="fs-5">
              <strong>Elenco</strong>
            </h2>
            <ul className="d-flex gap-2 m-0 p-0">
              {movie.cast.map((actor, index) => (
                <li key={index}>{actor?.name.first}</li>
              ))}
            </ul>
          </section>
        </article>
      ))}
    </div>
  );
};
