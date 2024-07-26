import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <Header />
      <Container>
        <h2 className={styles.title}>Algo deu errado!</h2>
        <div className={styles.texts}>
          <span className={styles.big_text}>404</span>
          <strong className={styles.red_text}>Página não Localizada!</strong>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default PageNotFound;
