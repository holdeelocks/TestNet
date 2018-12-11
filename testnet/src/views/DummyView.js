import React from 'react';
import { connect } from 'react-redux';

import {
  login,
  getQuizzes,
  getQuizz,
  getTopics,
  getQuestions,
  postQuizz,
  updateQuizz,
  updateQuestion,
  postQuestion,
  deleteQuizz,
  deleteQuestion,
  getPosts,
  getPost,
  postPost,
} from '../store/actions';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNTQ0NTM1NDk0LCJleHAiOjE1NzYwOTMwOTR9.qcXR5sKpM_F36kbkT3Zd1_S6BtxR0NSXkLOIrGbNrvo";

class DummyView extends React.Component {
  componentDidMount() {
    console.log('mounted');
    // this.props.login({email: 'boom@cooltable.io', password: 'password'});
    // this.props.getQuizzes();
    // this.props.getQuestions(82);
    // this.props.postQuizz({ title: 'TestNet - Quizz I', topic: 'JavaScript' }, token);
    // this.props.updateQuestion(82,2,{question: 'This is the question?'},token);
    // this.props.updateQuizz(82, {title: 'Updated - Quizz'}, token);
    // this.props.getQuizz(1);
    // this.props.getTopics();
    // this.props.postQuestion(82, {
    //   question: 'More Test Question?',
    //   option1: 'maybe',
    //   option2: 'nope',
    //   answer: 2,
    // },token);
    // this.props.deleteQuizz(82, );
    // this.props.getPosts();
    // this.props.getPosts();
    // this.props.postPost({
    //   title: 'Boom Boom Post',
    //   body: 'In an ideal design world, we should be able to choose the placeholder text we want quickly and easily. To be able to select industry-specific placeholder text suitable for a wide range of design projects would be an absolute boon. For example, say you have a client in the healthcare industry – wouldn’t it be great to be able to quickly drop in some text even vaguely related to their industry? Although it’s possible to replace the default placeholder text in InDesign by creating your own .txt file (name it placeholder.txt and drop it into the InDesign application folder) it’s a shame you can’t select from a few custom options. (Interestingly, if you hold down Ctrl/Cmd whilst selecting ‘Fill with Placeholder Text’ a range of languages are available Hebrew, Japanese, Chinese etc.). It would be nice if Adobe considered expanding on this simple but frustratingly undervalued tool – when they’re asking for $49.99 a month, this is exactly the helpful tool they could be providing via their cloud.'
    // }, token);
  }

  render() {
    return (
      <div>
        Dummy View
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quizzes: state.quizzReducer.quizzes,
  fetchingQuizzes: state.quizzReducer.fetchingQuizzes,
})

export default connect(mapStateToProps, {
  login,
  getQuizzes,
  getQuizz,
  getTopics,
  getQuestions,
  postQuizz,
  updateQuizz,
  updateQuestion,
  postQuestion,
  getPosts,
  getPost,
  deleteQuizz,
  deleteQuestion,
  postPost,
})(DummyView);