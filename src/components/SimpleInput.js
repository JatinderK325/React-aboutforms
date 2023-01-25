import useInput from "../hooks/use-input";
// component
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler } = useInput(value => value.includes('@'));

  /* If we have one input in the form, it should be valid, only then our overall form is valid. If we have multiple inputs in the form, to make our overall form valid, all inputs should be valid. 
  useEffect(() => {
    if(enteredNameIsValid){
      setFormIsValid(true)
    } else{
      setFormIsValid(false);
    }

  }, [enteredNameIsValid]);
  */
  // Alternative of this useEffect() way:
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      // we write 'return' becoz if this statement is not true, this code(if block) will not be executed. hence, rest of the code in this function will work like a else part.
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();

  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameChangeHandler}
          // onBlur is a built-in event that fires whenever this input loses focus.
          onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          value={enteredEmail}
          type='text'
          id='email'
          onChange={emailChangeHandler}
          // onBlur is a built-in event that fires whenever this input loses focus.
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
