import useInput from '../hooks/use-input'; // input validation custom hook

// validation functions
const isEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    inputIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isEmpty);

  const {
    value: lastNameValue,
    inputIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isEmpty);

  const {
    value: emailValue,
    inputIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // another validation approach
    if (!formIsValid) {
      return;
    }

    // Successful Submission action
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    // reset form after Submission
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  // Form style error classes
  const firstNameInputClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='fName'>First Name</label>
          <input
            type='text'
            id='fName'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && (
            <p className='error-text'>First Name is empty!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lName'>Last Name</label>
          <input
            type='text'
            id='lName'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className='error-text'> Last Name is empty! </p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>E-Mail Address</label>
          <input
            type='text'
            id='email'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && (
            <p className='error-text'>Please enter a valid Email</p>
          )}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
