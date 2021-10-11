import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <Logo>Stream</Logo>
          </Link>
        </Middle>
        <Right>
          <GoogleAuth />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
