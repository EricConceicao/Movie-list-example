import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 0 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6px;
  margin: 12px 0;
`;

export const StyledFigure = styled.figure`
  position: relative;
  display: inline-block;
  margin: 0;

  div {
    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 25%;

    background-color: #eee;
    color: #111;
    border-radius: 0 0 5px 5px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;

    opacity: 0;
    transition: opacity ease 0.3s;
  }
  &:hover div,
  &:focus div {
    opacity: 1;
  }
`;

export const CardHeader = styled.header`
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    min-height: 50px;
  }
`;

export const Img = styled.img`
  display: block;
  height: 278px;
  border-radius: 5px;
  box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.text};
`;
