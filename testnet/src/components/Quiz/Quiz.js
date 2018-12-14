import React from "react";
import { Header, Button, Image, Segment, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getQuizz, getQuestions } from "../../store/actions/quizzActions";

class Quiz extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.token) {
      this.props.getQuizz(id, this.props.token);
    } else {
      this.props.getQuizz(id);
    }
    this.props.getQuestions(id);
  }

  render() {
    const id = this.props.match.params.id;
    const { quiz, questions } = this.props;
    const firstQuestion = questions ? questions[0] : null;

    return (
      <Segment clearing>
        <Header as="h2" color={quiz.favorite ? "yellow" : null}>
          {quiz.title}
          {quiz.favorite && <Icon name="star outline" color="yellow" />}
        </Header>

        <Button
          basic
          disabled={questions.length > 0 ? false : true}
          content="Begin Quiz"
          floated="right"
          color="green"
          onClick={() =>
            this.props.history.push(`/quizzes/${id}/${firstQuestion.id}`)
          }
        />

        <Header as="h5">
          {quiz.topic}
          <Header.Subheader>
            submitted by:
            {quiz.author ? (
              <Image circular src={quiz.author.img_url} avatar />
            ) : null}
            {quiz.author ? quiz.author.username : "Loading"}
          </Header.Subheader>

          <Header.Subheader content={`${quiz.votes} Votes`} />
        </Header>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  const { quizzReducer, loginReducer } = state;
  return {
    quiz: quizzReducer.quizz,
    questions: quizzReducer.questions,
    token: loginReducer.token
  };
};

export default connect(
  mapStateToProps,
  { getQuizz, getQuestions }
)(Quiz);
