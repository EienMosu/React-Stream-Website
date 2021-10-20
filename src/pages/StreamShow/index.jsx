import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../redux/actions";
import { Container, Desc, Title } from "./StreamShow.styles";

class StreamShow extends Component {
  componentDidMount() {
    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();

    this.props.fetchStream(myPath);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <Title>{this.props.stream.title}</Title>
        <Desc>{this.props.stream.description}</Desc>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  var myPath = window.location.pathname;
  myPath = myPath.split("/").pop();

  return {
    stream: state.streams[myPath],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
