import React, { Component } from "react";
//Redux
import { Field, reduxForm } from "redux-form";
//Styled
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Span,
} from "./StreamForm.styles";

export class StreamForm extends Component {
  renderInput({ input, label, meta }) {
    return (
      <>
        <Label>{label}</Label>
        <Input {...input} />
        <Span>{meta.touched && meta.error}</Span>
      </>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title!";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description!";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
