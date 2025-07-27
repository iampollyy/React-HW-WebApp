import styles from './loginPage.module.scss';

import LoginForm from "@ui/forms/loginForm/LoginForm";

 const LoginPage = () => {
    return (
        <section className={styles.loginPage}>
            <div className={styles.loginPage__container}>
                <h1 className="heading1">Log in</h1>
                <LoginForm  />
            </div>
        </section>
    );
}

export default LoginPage;