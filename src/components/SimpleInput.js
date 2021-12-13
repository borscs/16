import {useEffect, useRef, useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueHandler: nameValueChangeHandler,
        inputBLurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')


    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState( false);

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;


    let formIsValid = false

    if(enteredNameIsValid && enteredEmailIsValid){
        formIsValid = true;
    }

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const emailInputChangeBLurHandler = () => {
        setEnteredEmailTouched(true);
    };

    const formSubmitHandler= (event) => {
        event.preventDefault();

        if(!enteredNameIsValid){
            return;
        }

        console.log(enteredName);

        resetNameInput();

        setEnteredEmail('');
        setEnteredEmailTouched( false);
    };

    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';


    const emailInputClasses = emailInputIsValid
        ? 'form-control invalid'
        : 'form-control';


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
               id='name'
               value={enteredName}
               onChange={nameValueChangeHandler}
               onBlur={nameBlurHandler}
        />
          {nameInputHasError && (
              <p className='error-text'>Name must not be empty.</p>
          )}
      </div>
        <div className={emailInputClasses}>
            <label htmlFor='email'>Your Email</label>
            <input type='email'
                   id='email'
                   value={enteredEmail}
                   onChange={emailInputChangeHandler}
                   onBlur={emailInputChangeBLurHandler}
            />
            {emailInputIsValid && (
                <p className='error-text'>Email must not be empty.</p>
            )}
        </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
