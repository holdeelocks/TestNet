import React from "react";
import { Header, Grid, Icon } from "semantic-ui-react";

const QuizList = props => {
  const { quizzes, history, user } = props;
  return (
    <Grid centered container columns={2} relaxed padded="vertically">
      {quizzes.map(quiz => (
        <Grid.Column
          key={quiz.id}
          style={{ padding: "1rem", cursor: "pointer" }}
          onClick={() => history.push(`/quizzes/${quiz.id}`)}
        >
          <Grid.Row stretched={true}>
            <Header
              as="h1"
              color={quiz.author !== user.username ? "blue" : null}
              attached="bottom"
              dividing
            >
              {user.username === quiz.author && <Icon name="street view" />}
              <Header.Content>
                {quiz.title}
                <Header.Subheader content={`submitted by: ${quiz.author}`} />
              </Header.Content>
            </Header>
          </Grid.Row>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default QuizList;
