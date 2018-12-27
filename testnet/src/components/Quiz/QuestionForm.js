import React, { Component } from "react";
import { Segment, Form, Dropdown, Button } from "semantic-ui-react";
import { connect } from "react-redux";

import {
  postQuestion,
  updateQuestion,
  deleteQuestion
} from "../../store/actions";

class QuestionForm extends Component {
  state = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: null
  };

  componentDidMount() {
    const { add, question } = this.props;

    !add &&
      this.setState({
        question: question.question,
        option1: question.options[0],
        option2: question.options[1],
        option3: question.options.length > 2 ? question.options[2] : "",
        option4: question.options.length > 3 ? question.options[3] : ""
      });
  }

  componentWillReceiveProps(props) {
    const { add, question } = props;

    !add &&
      this.setState({
        question: question.question,
        option1: question.options[0],
        option2: question.options[1],
        option3: question.options.length > 2 ? question.options[2] : "",
        option4: question.options.length > 3 ? question.options[3] : ""
      });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { question, option1, option2, option3, option4, answer } = this.state;

    const { add, postQuestion, updateQuestion, match, token } = this.props;
    const id = match.params.id;
    const quiz = { question, option1, option2, answer };

    if (option3) quiz.option3 = option3;
    if (option4) quiz.option4 = option4;

    add
      ? postQuestion(id, quiz, token)
      : updateQuestion(id, this.props.question.id, quiz, token);

    this.setState({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: null
    });
  };

  handleDelete = e => {
    e.preventDefault();
    const { deleteQuestion, question, match, token } = this.props;

    deleteQuestion(match.params.id, question.id, token);
  };

  render() {
    const { question, option1, option2, option3, option4 } = this.state;
    const { add } = this.props;
    console.log(this.state);

    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Question"
            name="question"
            value={question}
            onChange={this.handleChange}
            required
          />
          <Form.Group widths="equal">
            <Form.Input
              label="Option 1"
              name="option1"
              value={option1}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Option 2"
              name="option2"
              value={option2}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Option 3 - optional"
              name="option3"
              value={option3}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Option 4 - optional"
              name="option4"
              value={option4}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Dropdown
            labeled
            button
            selection
            placeholder="Answer Key"
            icon="key"
            className="icon required"
            name="answer"
            value={this.state.answer}
            options={[
              { key: "option1", value: 1, text: "Option 1" },
              { key: "option2", value: 2, text: "Option 2" },
              { key: "option3", value: 3, text: "Option 3" },
              { key: "option4", value: 4, text: "Option 4" }
            ]}
            onChange={(e, data) => this.setState({ [data.name]: data.value })}
          />
          <Button
            color="teal"
            type="submit"
            content={add ? "Add" : "Save"}
            disabled={add && this.state.answer === null}
          />
          {!add && (
            <Button
              color="red"
              content={"Delete"}
              onClick={this.handleDelete}
            />
          )}
        </Form>
      </Segment>
    );
  }
}

export default connect(
  ({ loginReducer }) => ({
    token: loginReducer.token
  }),
  {
    postQuestion,
    updateQuestion,
    deleteQuestion
  }
)(QuestionForm);
