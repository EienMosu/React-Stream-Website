import React, { Component } from "react";
//Redux
import { connect } from "react-redux";
import { fetchStreams } from "../../redux/actions";
//Styled
import {
  Button,
  Container,
  Create,
  Desc,
  Icon,
  Left,
  Middle,
  PageTitle,
  Right,
  Stream,
  Title,
  Wrapper,
} from "./StreamList.styles";
//Icon
import icon from "../../assets/camera.png";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return (
      <Container>
        <PageTitle>Streams</PageTitle>
        <Wrapper>
          {this.props.streams.map((stream) => (
            <Stream key={stream.id}>
              <Left>
                <Icon src={icon} />
              </Left>
              <Middle>
                <Link
                  to={`/streams/${stream.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Title>{stream.title}</Title>
                  <Desc>{stream.description}</Desc>
                </Link>
              </Middle>
              {this.props.currentUserId === stream.userId && (
                <Right>
                  <Link to={`/streams/edit/${stream.id}`}>
                    <Button color="blue">Edit</Button>
                  </Link>
                  <Link to={`/streams/delete/${stream.id}`}>
                    <Button color="darkred">Delete</Button>
                  </Link>
                </Right>
              )}
            </Stream>
          ))}
          {this.props.isSignedIn && (
            <Link to="/streams/create">
              <Create>Create Stream</Create>
            </Link>
          )}
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
