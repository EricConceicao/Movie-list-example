import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { fetchData, getConfig } from "../../utils/fetchData.js";

export const CastSection = ({ movieId }) => {
  const [castData, setCastData] = useState([]);

  const handleFetch = useCallback(async () => {
    const [{ cast }] = await fetchData(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR`,
      getConfig
    );

    setCastData(cast);
  }, [movieId]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <ul>
      {castData?.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  );
};

CastSection.propTypes = {
  movieId: PropTypes.number.isRequired,
};
