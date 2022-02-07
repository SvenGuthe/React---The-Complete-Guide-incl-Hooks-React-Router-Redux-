import useInput from "../hooks/use-input";

const validClasses = 'form-control';
const invalidClasses = validClasses + ' invalid';

const getClassesbasedOnError = (fieldHasError) => fieldHasError ? invalidClasses : validClasses

const BasicForm = (props) => {

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameValueChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameReset
  } = useInput((input) => input.trim() !== '')

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset
  } = useInput((input) => input.trim() !== '')

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset
  } = useInput((input) => input.includes('@'))

  const firstNameDivClasses = getClassesbasedOnError(firstNameHasError)
  const lastNameDivClasses = getClassesbasedOnError(lastNameHasError)
  const emailDivClasses = getClassesbasedOnError(emailHasError)

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return
    }

    firstNameReset();
    lastNameReset();
    emailReset();

  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameDivClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameValueChangeHandler} onBlur={firstNameInputBlurHandler} />
          {firstNameHasError && <p className='error-text'>First Name is Invalid</p>}
        </div>
        <div className={lastNameDivClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameValueChangeHandler} onBlur={lastNameInputBlurHandler} />
          {lastNameHasError && <p className='error-text'>Last Name is Invalid</p>}
        </div>
      </div>
      <div className={emailDivClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' value={emailValue} onChange={emailValueChangeHandler} onBlur={emailInputBlurHandler} />
        {emailHasError && <p className='error-text'>Email is Invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );

};

export default BasicForm;
