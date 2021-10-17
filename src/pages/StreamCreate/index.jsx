import React, { Component } from "react";
//Redux
import { connect } from "react-redux";
import StreamForm from "../../components/StreamForm";
import { createStream } from "../../redux/actions";
//Styled
import { Container, PageTitle } from "./StreamCreate.styles";

export class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <Container>
        <PageTitle>Create a Stream</PageTitle>
        <StreamForm onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
