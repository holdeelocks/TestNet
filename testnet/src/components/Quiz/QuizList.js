import React from "react";
import { Header, Container } from "semantic-ui-react";

const QuizList = props => {
  const { quizzes, history } = props;
  console.log(quizzes);
  return (
    <div className="quiz-list">
      {quizzes.map(quiz => (
        <Container
          className="quiz-card"
          key={quiz.id}
          onClick={() => history.push(`/quizzes/${quiz.id}`)}
        >
          <Header as="h1">
            {quiz.title}
            <Header.Subheader content={quiz.author} />
          </Header>
        </Container>
      ))}
    </div>
  );
};

export default QuizList;
