import PropTypes from "prop-types";

import { StyledButton } from "./styles.js";
// A Button component to maintain a single button style pattern.
// Receives children for the button text, a disabledCondition to make the button turn into disabled state and a
// handleclick function as props.
export const Button = ({ children, disabledCondition, handleClick }) => {
  return (
    <StyledButton disabled={disabledCondition} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  disabledCondition: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};
