import {useState} from "react";


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setISTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBLurHandler =(event) => {
        setISTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setISTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueHandler,
        inputBLurHandler,
        reset
    };
};

export default useInput;
