import React from "react";
import NavBar from "../components/NavBar";
import QuizRoutes from "../components/Quiz/Routes";
import { getQuizzes } from "../store/actions/quizzActions";
import { logout } from "../store/actions";
import { connect } from "react-redux";

class QuizView extends React.Component {
  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    const { loggedIn, click, quizzes, logout, user } = this.props;
    return (
      <div>
        <NavBar
          logout={logout}
          loggedIn={loggedIn}
          click={click}
          getRegistrationFrom={this.props.getRegistrationFrom}
        />
        <QuizRoutes quizzes={quizzes} loggedIn={loggedIn} user={user} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loginReducer, quizzReducer } = state;
  return {
    quizzes: quizzReducer.quizzes,
    loggedIn: loginReducer.loggedIn
  };
};
export default connect(
  mapStateToProps,
  { getQuizzes, logout }
)(QuizView);
