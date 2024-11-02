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
  border-radius: 10%;
  padding: 0.6em;
  margin: 0.5rem;
  border-top: solid 2px #663399;
  figure {
    margin: 0;
    text-align: center;
  }
`;
export const Img = styled.img`
  height: 232px;
  border-radius: 5px;
`;
