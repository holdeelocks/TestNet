import React from "react";
import { withRouter, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import dummydata from "./dummydata";
import DummyView from "./views/DummyView";
import QuizList from "./components/Quiz/QuizList";
import PostList from "./components/post/PostList";
import { login, register } from "./store/actions";

class App extends React.Component {
  state = {
    isAuthed: false
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ isAuthed: true });
    }
    // this.props.login({
    //   email: "boom@cooltable.io",
    //   password: "password",
    // })
  }
  render() {
    const { isAuthed } = this.state;
    return (
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
        Welcome to TestNet
        {isAuthed && (
          <input
            type="text"
            name="comment"
            placeholder="logged in comment area"
          />
        )}
        <Route
          exact
          path="/quizzes"
          render={props => <QuizList {...props} quizzes={dummydata} />}
        />
        {/* <Route
          path="/quizzes/:id"
          render={props => <QuizView {...props} quizzes={dummydata} />}
        /> */}
        <Route exact path="/posts" render={props => <PostList {...props} />} />
        <Route exact path="/dummy" render={props => <DummyView {...props} />} />
      </div>
    );
  }
}

export default connect(
  state => ({
    loggedIn: state.loginReducer.loggedIn
  }),
  { login, register }
)(withRouter(App));
