import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

import * as ACTIONS from '../redux/actions';

class Home extends Component {
  dispatchDecrementOption(optionId) {
    this.props.dispatch({ type: ACTIONS.DECREMENT_OPTION, optionId });
  }

  dispatchIncrementOption(optionId) {
    this.props.dispatch({ type: ACTIONS.INCREMENT_OPTION, optionId });
  }

  dispatchSubmitSurvey(id) {
    this.props.dispatch({ type: ACTIONS.SUBMIT_ANSWERS, id });
  }

  render() {
    const { surveyId, question, options, submitted } = this.props;

    const optionGroup = options.map(option => 
      <div id={'option option_' + option.id} key={option.id}>
        <h3>{ option.label }</h3>
        <h4>{ option.value }</h4>
        <ButtonToolbar>
          <ButtonGroup bsSize="large">
            <Button onClick={() => this.dispatchDecrementOption(option.id)}>-</Button>
            <Button onClick={() => this.dispatchIncrementOption(option.id)}>+</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );

    const submitButton = submitted
      ? <Button disabled>Submitted!</Button>
      : <Button onClick={() => this.dispatchSubmitSurvey(surveyId)}>Submit</Button>

    return (
      <div className='Home'>
        <h1>Hello React/Redux!</h1>

        <h2>{ question }</h2>

        <form>
          { optionGroup }
          { submitButton }
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    surveyId: store.surveyReducer.id,
    question: store.surveyReducer.question,
    options: store.surveyReducer.options,
    submitted: store.surveyReducer.submitted
  }
}

export default connect(mapStoreToProps)(Home);
