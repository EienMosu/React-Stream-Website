import React, { Component } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../redux/actions";
import { Container, Desc, Title, Video, Wrapper } from "./StreamShow.styles";

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();

    this.props.fetchStream(myPath);

    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${myPath}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <Wrapper>
          <Video ref={this.videoRef} controls={true} />
          <Title>{this.props.stream.title}</Title>
          <Desc>{this.props.stream.description}</Desc>
        </Wrapper>
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
