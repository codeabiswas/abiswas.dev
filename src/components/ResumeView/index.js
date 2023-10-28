import React from "react";
import { Modal, Button, Stack } from "react-bootstrap";
import AndreiBiswasResumeImage from "../../assets/Andrei_Biswas_Resume.jpg";
import AndreiBiswasResume from "../../assets/Andrei_Biswas_Resume.pdf";
import { StyledResumeImage, StyledResumeViewDiv } from "./styled";

const ResumeView = (props) => {
  return (
    <>
      <Modal {...props} fullscreen={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Stack direction="horizontal" gap={3}>
              Resume
              <div className="vr" />
              <a
                href={AndreiBiswasResume}
                download="Andrei_Biswas_Resume"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Download</Button>
              </a>
            </Stack>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledResumeViewDiv>
            <StyledResumeImage
              src={AndreiBiswasResumeImage}
              // style={{ maxWidth: "75%" }}
              title="Resume image"
            />
          </StyledResumeViewDiv>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResumeView;
