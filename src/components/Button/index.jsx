// A Button component to maintain a single button style.
//
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
