import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    reset: resetFirstNameInput,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    reset: resetLastNameInput,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler } = useInput(value => value.includes('@'));

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // if (!enteredFirstNameIsValid) {
    //   return;
    // }

    // if (!enteredLastNameIsValid) {
    //   return;
    // }

    // if (!enteredEmailIsValid) {
    //   return;
    // }

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();

  }

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            value={enteredFirstName}
            type='text'
            id='fname'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler} />
          {firstNameInputHasError && <p className="error-text">Please enter your first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            value={enteredLastName}
            type='text'
            id='lname'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
          {lastNameInputHasError && <p className="error-text">Please enter your last name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          value={enteredEmail}
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">You must enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
