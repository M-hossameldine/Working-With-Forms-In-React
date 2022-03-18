import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  let result = initialInputState;

  if (action.type === 'INPUT') {
    result = {
      ...state,
      value: action.value,
    };
  }

  if (action.type === 'BLUR') {
    result = {
      ...state,
      isTouched: true,
    };
  }

  if (action.type === 'RESET') {
    result = initialInputState;
  }

  return result;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const inputIsValid = validateValue(inputState.value);
  const hasError = !inputIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
