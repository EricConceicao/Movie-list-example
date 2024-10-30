import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData.js";

export const CastSection = ({ movieId }) => {
  const [castData, setCastData] = useState([]);

  async function handleFetch() {
    const [{ cast }] = await fetchData(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2IwMDE0YWIxZTJhYjUzMzA3ODkxOGM2MjE0OTNiMSIsIm5iZiI6MTczMDI5MjI2MS41ODgyODg1LCJzdWIiOiI2NzIyMWRhYTE2MDE0MTlmNzM2MWQ1ZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LnNwmYGJPb_G67ShKqjIbpSoj4jFna_bTJK4_9b95Ng",
        },
      }
    );

    setCastData(cast);
  }

  useEffect(() => {
    handleFetch();
  }, []);

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
