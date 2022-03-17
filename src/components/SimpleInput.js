import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    inputIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // Another validation approach (not used)
    // setEnteredNameTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // sucessful submission action
    console.log(enteredName);
    console.log(enteredEmail);

    // reset form after successful submission
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name input is empty!</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid E-Mail!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
