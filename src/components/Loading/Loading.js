import React from "react";
import { Spinner } from "react-bootstrap";
import StyledContainer from "./Loading.styled";

const Loading = () => {
  return (
    <>
      <StyledContainer>
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <div>
          <h3>Loading...</h3>
        </div>
      </StyledContainer>
    </>
  );
};

export default Loading;
