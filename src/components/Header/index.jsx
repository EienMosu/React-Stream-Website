import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
import { Container, Logo, Middle, Right, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Middle>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>Streamy.</Logo>
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
