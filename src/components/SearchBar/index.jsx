import PropTypes from "prop-types";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

// This component is the SearchBar in the nav bar on the top of the screen.
// It receives a handleChange function, placeholder, arialabel and title from props.
// Used to filter the movies array on user
export const SearchBar = ({ onChange, placeholder, ariaLabel, title }) => {
  return (
    <Nav className="p-3 bg-info">
      <Navbar>
        <Navbar.Brand className="">{title}</Navbar.Brand>
        <Form>
          <Form.Control
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-label={ariaLabel}
          />
        </Form>
      </Navbar>
    </Nav>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
};
