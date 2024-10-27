import PropTypes from "prop-types";

// A Button component to maintain a single button style pattern.
// Receives children for the button text, a disabledCondition to make the button turn into disabled state and a
// handleclick function as props.
export const Button = ({ children, disabledCondition, handleClick }) => {
  return (
    <button
      className="btn btn-primary col-4"
      disabled={disabledCondition}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  disabledCondition: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};
