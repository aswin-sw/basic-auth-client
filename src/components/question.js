import React from 'react';
import { fetchQuestions } from '../api/question';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    fetchQuestions().then(questions => {
      this.setState({ questions });
    });
  }

  render() {
    let questions = this.state.questions.map(({ id, data }) => (
      <div key={id}>{data.stimulus}</div>
    ));

    return (
      <div>
        <h1> Questions </h1>
        {questions}
      </div>
    );
  }
}

export default Questions;
