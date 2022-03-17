import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateValue(enteredValue);
  const hasError = !inputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
