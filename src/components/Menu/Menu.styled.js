import { Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledMenu = styled(Navbar).attrs({
  className: "py-3 bg-body-tertiary",
  expand: "lg",
})``;

const CollapsibleNavbar = styled(Navbar.Collapse).attrs({
  className: "d-flex-md flex-column align-self-center",
})``;

export { StyledMenu, CollapsibleNavbar };
