import { combineReducers } from 'redux';
import _ from 'lodash';

import * as ACTIONS from './actions';

const initialState = {
  id: 0,
  question: 'What is your preferred OS?',
  options: [
    {
      id: 0,
      label: 'iOS',
      value: 0
    }, {
      id: 1,
      label: 'Windows',
      value: 0
    }, {
      id: 2,
      label: 'GNU/Linux',
      value: 0
    }
  ],
  submitted: false
}

const conductSurvey = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT_OPTION:
      return incrementStateOptionValue(state, action.optionId);
    case ACTIONS.DECREMENT_OPTION:
      return decrementStateOptionValue(state, action.optionId);
    case ACTIONS.SUBMIT_ANSWERS:
      return submitSurvey(state, action.id);
    default:
      return state;
  }
}

const incrementStateOptionValue = (state, optionId) => {
  return updateOptionsWithNewValue(state, optionId, 1);
}

const decrementStateOptionValue = (state, optionId) => {
  return updateOptionsWithNewValue(state, optionId, -1);
}

const submitSurvey = (state, id) => {
  if (!state.submitted) {
    return Object.assign({}, state, {
      submitted: true
    });
  }
  return state;
}

const updateOptionsWithNewValue = (state, optionId, additive) => {
  const optionIndex = _.findIndex(state.options, { id: optionId });

  let nextOptions = Object.assign([], state.options);
  let nextValue = nextOptions[optionIndex].value + additive;
  nextOptions[optionIndex].value = nextValue > 0 ? nextValue : 0;

  return Object.assign({}, state, { options: nextOptions });
}

export default combineReducers({
  surveyReducer: conductSurvey
})
