import React, { Component } from "react";
import { Button, Container } from "./GoogleAuth.styles";

export class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "496115351936-m5r1bronfhuijeetic7jqjch78rtnvh6.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <Container>
          <Button onClick={() => this.auth.signOut()}>Sign Out</Button>
        </Container>
      );
    } else {
      return (
        <Container>
          <Button onClick={() => this.auth.signIn()}>Sign In</Button>
        </Container>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
