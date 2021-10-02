import React from "react";
import GoogleAuth from "../GoogleAuth";
import {
  Container,
  Left,
  Logo,
  Middle,
  Page,
  Right,
  Wrapper,
} from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Page>Pages</Page>
        </Left>
        <Middle>
          <Logo>Stream</Logo>
        </Middle>
        <Right>
          <GoogleAuth />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
