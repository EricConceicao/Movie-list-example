import PropTypes from "prop-types";

import { Container } from "./styles.js";
// A Button container component to handle a group of buttons.
// Receives buttons as children
export const ButtonContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

ButtonContainer.propTypes = {
  children: PropTypes.node,
};
