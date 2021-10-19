import React from "react";
import ReactDOM from "react-dom";

import {
  ButtonContainer,
  Container,
  ModalTitle,
  Span,
  StreamInfo,
  Wrapper,
} from "./Modal.styles";

const Modal = ({ title, content, actions, onDismiss, streamTitle,streamDesc }) => {
  return ReactDOM.createPortal(
    <Container onClick={onDismiss}>
      <Wrapper onClick={(event) => event.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <Span>{content}</Span>
        <StreamInfo>Title: {streamTitle}</StreamInfo>
        <StreamInfo>Description: {streamDesc}</StreamInfo>
        <ButtonContainer>{actions}</ButtonContainer>
      </Wrapper>
    </Container>,
    document.querySelector("#modal")
  );
};

export default Modal;
