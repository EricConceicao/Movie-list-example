import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { fetchData, getConfig } from "../../utils/fetchData.js";
import { Img, GridContainer, Card, StyledFigure } from "./styles.js";

export const MovieCard = ({ moviesArray }) => {
  const [imageBaseUrl, setImageBaseUrl] = useState();
  const [posterSize] = useState("w185");

  async function handleFetch() {
    const [{ images }] = await fetchData(
      "https://api.themoviedb.org/3/configuration",
      getConfig
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
          <StyledFigure $title={movie.title}>
            <Img
              alt={`imagem do filme: ${movie.title}`}
              src={imageBaseUrl + posterSize + movie.poster_path}
            />
            <div>{movie.title ? movie.title : "Título indisponível"}</div>
          </StyledFigure>
        </Card>
      ))}
    </GridContainer>
  );
};

MovieCard.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};
