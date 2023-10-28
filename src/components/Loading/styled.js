import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container).attrs({
  className: "d-flex flex-column justify-content-center align-items-center",
})`
  height: 100vh;
`;

export default StyledContainer;
