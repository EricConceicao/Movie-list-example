import PropTypes from "prop-types";
import { StyledHeader } from "./styles.js";

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <h1>MovieList</h1>
      {children}
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
