import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext";

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container fluid className={theme}>
      <h1 className="display-3 mt-5">List of books</h1>
      <ul className="lead">
        <li>Sapiens</li>
        <li>Fear and loathing of the campaign trail '72</li>
        <li>Range</li>
        <li>Chasing the scream</li>
        <li>Former People</li>
      </ul>
    </Container>
  );
};
