import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { fetchData } from "../../utils/fetchData.js";
import { Img, GridContainer, Card, CardHeader } from "./styles.js";

export const MovieCard = ({ moviesArray }) => {
  const [imageBaseUrl, setImageBaseUrl] = useState();
  const [posterSize] = useState("w185");

  async function handleFetch() {
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
    handleFetch();
  }, []);

  return (
    <GridContainer>
      {moviesArray?.map((movie) => (
        <Card id="movie-card" key={movie.id}>
          <CardHeader>
            <h2>{movie.title}</h2>
          </CardHeader>

          <section>
            <figure>
              <Img
                alt={`imagem do filme: ${movie.title}`}
                src={imageBaseUrl + posterSize + movie.poster_path}
              />
            </figure>
          </section>
        </Card>
      ))}
    </GridContainer>
  );
};

MovieCard.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};
