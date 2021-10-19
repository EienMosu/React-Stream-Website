import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../redux/actions";
// ReduxForm
import StreamForm from "../../components/StreamForm";
// StyledComponents
import { Container, PageTitle } from "./StreamEdit.styles";
// Lodash
import _ from "lodash";


class StreamEdit extends Component {
  componentDidMount() {
    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();

    this.props.fetchStream(myPath);
  }

  onSubmit = (formValues) => {
    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();
    
    this.props.editStream(myPath, formValues)
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <PageTitle>Edit Stream</PageTitle>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  var myPath = window.location.pathname;
  myPath = myPath.split("/").pop();

  return { stream: state.streams[myPath] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
