import PropTypes from "prop-types";
import { fetchData } from "../../utils/fetchData.js";
import { useEffect, useState } from "react";

import "./styles.css";

export const MovieCard = ({ moviesArray }) => {
  const [imageBaseUrl, setImageBaseUrl] = useState();
  const [posterSize] = useState("w500");

  async function initialConfig() {
    const [{ images }] = await fetchData(
      "https://api.themoviedb.org/3/configuration",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2IwMDE0YWIxZTJhYjUzMzA3ODkxOGM2MjE0OTNiMSIsIm5iZiI6MTczMDI5MjI2MS41ODgyODg1LCJzdWIiOiI2NzIyMWRhYTE2MDE0MTlmNzM2MWQ1ZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LnNwmYGJPb_G67ShKqjIbpSoj4jFna_bTJK4_9b95Ng",
        },
      }
    );
    setImageBaseUrl(images.secure_base_url);
  }

  useEffect(() => {
    initialConfig();
  }, []);

  return (
    <div id="cards-container">
      {moviesArray?.map((movie) => (
        <article
          id="movie-card"
          key={movie.id}
          className="border border-1 border-dark rounded p-2 mb-3"
        >
          <header>
            <h2 className="fs-5">{movie.title}</h2>
          </header>

          <section>
            <figure>
              <img
                width="100%"
                alt={`imagem do filme: ${movie.title}`}
                src={imageBaseUrl + posterSize + movie.poster_path}
              />
            </figure>
            <p>
              <strong>Lançamento:</strong> {movie.release_date}
              <br />
              <strong>Sinopse:</strong> {movie.overview}
            </p>
          </section>
          <section className="border-top border-1 border-dark">
            <h2 className="fs-5">
              <strong>Elenco</strong>
            </h2>
            <ul className="d-flex gap-2 m-0 p-0"></ul>
          </section>
        </article>
      ))}
    </div>
  );
};

MovieCard.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};
