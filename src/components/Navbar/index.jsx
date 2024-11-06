import PropTypes from "prop-types";
import { FilterNav } from "./styles";

export function NavBar({ children }) {
  return <FilterNav>{children}</FilterNav>;
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};
