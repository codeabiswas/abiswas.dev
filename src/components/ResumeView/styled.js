import styled from "styled-components";
import { Image } from "react-bootstrap";

const StyledResumeViewDiv = styled.div.attrs({
  className: "d-flex flex-row justify-content-center",
})``;

const StyledResumeImage = styled(Image)`
  max-width: 75%;
`;

export { StyledResumeViewDiv, StyledResumeImage };
