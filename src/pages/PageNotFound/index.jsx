import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <section className={styles.page404}>
      <h2 className={styles.title}>Algo deu errado!</h2>
      <div className={styles.texts}>
        <span className={styles.big_text}>404</span>
        <strong className={styles.red_text}>Página não Localizada!</strong>
      </div>
    </section>
  );
}

export default PageNotFound;
