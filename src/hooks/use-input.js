import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && valueIsTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setValueIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
    }

    return ({
        value: enteredValue,
        hasError: hasError,
        isValid: valueIsValid,
        valueChangeHandler: valueChangeHandler,
        inputBlurHandler: inputBlurHandler,
        reset: reset
    });
};

export default useInput;