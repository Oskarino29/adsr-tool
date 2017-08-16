/* Action types */

export const INCREMENT_OPTION = 'INCREMENT_OPTION';
export const DECREMENT_OPTION = 'DECREMENT_OPTION';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';


/* Action creators */

export function incrementOption(optionId) {
  return { type: INCREMENT_OPTION, optionId }
}

export function decrementOption(optionId) {
  return { type: DECREMENT_OPTION, optionId }
}

export function submitAnswers(id) {
  return { type: SUBMIT_ANSWERS, id }
}
