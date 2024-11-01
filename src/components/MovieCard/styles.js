import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const CardHeader = styled.header`
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    min-height: 50px;
  }
`;

export const Card = styled.section`
  border-radius: 5px;
  max-width: 250px;
  padding: 0.6em;
  margin: 0.5rem;
  outline: solid 2px #a12;

  figure {
    text-align: center;
  }
`;
export const Img = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 5px;
`;
