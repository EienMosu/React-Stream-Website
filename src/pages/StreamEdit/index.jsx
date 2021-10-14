import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../redux/actions";

class StreamEdit extends Component {
  componentDidMount() {
    var myPath = window.location.pathname;
    myPath = myPath.split("/").pop();

    this.props.fetchStream(myPath);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  var myPath = window.location.pathname;
  myPath = myPath.split("/").pop();

  return { stream: state.streams[myPath] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
