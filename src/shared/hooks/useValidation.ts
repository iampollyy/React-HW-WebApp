import { useState, useEffect } from "react";

type TValidations = {
    isEmpty?: boolean;
    isEmail?: boolean;
    isPassword?: number;
    isValid?: boolean;
}

const useValidation = (value:string, validations:TValidations) => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    setIsEmpty(value.trim() === "");
                    break;
                case "isEmail":
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    setIsEmail(emailRegex.test(value.toLowerCase()));
                    break;
                case "isPassword":
                    const minLength = validations[validation] || 8;
                    setIsPassword(value.length >= minLength);
                    break;
                default:
                    break;
            }
        }
    }, [value, validations]);

    useEffect(() => {
        let valid = true;
        if (validations.isEmpty && isEmpty) valid = false;
        if (validations.isEmail && !isEmail) valid = false;
        if (validations.isPassword && !isPassword) valid = false;
        setIsValid(valid);
    }, [isEmpty, isEmail, isPassword, validations]);

    return {
        isEmpty,
        isEmail,
        isPassword,
        isValid,
    };
};

export default useValidation;