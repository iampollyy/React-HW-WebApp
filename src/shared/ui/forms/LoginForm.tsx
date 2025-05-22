import styles from './loginForm.module.scss';

import { Input } from "@ui";
import { ButtonPattern } from "@ui";

import { useInput } from "@hooks";
import { useValidation } from "@hooks";

import { auth } from '@config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { FormEvent }  from "react";

const LoginForm: React.FC = () => {
    const email = useInput('');
    const emailValidation = useValidation(email.value, { isEmpty: true, isEmail: true });

    const password = useInput('');
    const passwordValidation = useValidation(password.value, { isEmpty: true, isPassword: 8 });

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
                e.preventDefault();
                try {
                    if (emailValidation.isValid && passwordValidation.isValid) {
                        await signInWithEmailAndPassword(auth, email.value, password.value);
                        navigate('/menu');
                    } else {
                        console.error("Validation Error");
                    }
                } catch (err) {
                    console.error(err);
                }
    };

    const handleCancel = () => {
        email.reset();
        password.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.login__container} noValidate>
            <div className={styles.input__container}>
                <div className={styles.row__container}>
                    <div className={styles.row}>
                        <label className={styles.label__wrapper}>User Name
                            <Input
                                type="email"
                                name="email"
                                size="lg"
                                value={email.value}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
                                onBlur={(e: React.FocusEvent<HTMLInputElement>) => email.onBlur(e)}
                                required
                            />
                        </label>

                        {email.isDirty && emailValidation.isEmpty && (
                            <span className={styles.error}>Email cannot be empty</span>
                        )}
                        {email.isDirty && !emailValidation.isEmail && !emailValidation.isEmpty && (
                            <span className={styles.error}>Email is not valid</span>
                        )}

                    </div>


                    <div className={styles.row}>
                        <label className={styles.label__wrapper}>Password
                            <Input
                                type="password"
                                name="password"
                                size="lg"
                                value={password.value}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => password.onChange(e)}
                                onBlur={(e: React.FocusEvent<HTMLInputElement>) => password.onBlur(e)}
                                required
                            />
                        </label>

                        {password.isDirty && passwordValidation.isEmpty && (
                            <span className={styles.error}>Password cannot be empty</span>
                        )}
                        {password.isDirty && !passwordValidation.isPassword && !passwordValidation.isEmpty && (
                            <span className={styles.error}>Password must be at least 8 characters</span>
                        )}
                    </div>
                </div>

            <div className={styles.btn__container}>
                <ButtonPattern type='submit' size="lg">Submit</ButtonPattern>
                <ButtonPattern type='button' variant="secondary" size="lg" onClick={handleCancel}>
                    Cancel
                </ButtonPattern>
            </div>
            </div>

        </form>
    );
};

export default LoginForm;