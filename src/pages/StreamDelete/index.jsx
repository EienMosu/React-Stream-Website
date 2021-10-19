import React, { Component } from "react";
// Components
import Modal from "../../components/Modal";
// History
import history from "../../history";
// Styled Components
import { Button, Container, PageTitle } from "./StreamDelete.styles";
// Redux
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../redux/actions";

class StreamDelete extends Component {
  componentDidMounth() {
    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();

    fetchStream(myPath);
  }

  deleteStream = () => {
    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();

    this.props.deleteStream(myPath);
  };

  actions = (
    <>
      <Button color="darkred" onClick={this.deleteStream}>
        Delete
      </Button>
      <Button color="blue">Cancel</Button>
    </>
  );

  render() {
    return (
      <>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.actions}
          streamTitle={this.props.stream.title}
          streamDesc={this.props.stream.description}
          onDismiss={() => {
            history.push("/");
            history.go(0);
          }}
        />
        <Container>
          <PageTitle>StreamDelete</PageTitle>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  var myPath = window.location.pathname;
  myPath = myPath.split("/").pop();

  return { stream: state.streams[myPath] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
