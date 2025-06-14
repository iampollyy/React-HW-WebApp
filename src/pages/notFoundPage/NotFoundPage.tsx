import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={styles.notFoundPage__section}>
      <div className={styles.notFoundPage__wrapper}>
        <h1 className='heading1'>404</h1>
        <p className='heading1'>Page Not Found</p>
      </div>
    </section>
  );
}

export default NotFoundPage;