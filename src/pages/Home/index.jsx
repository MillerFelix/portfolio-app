import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentation}>
            <p>
              Olá, sou <br />
              <span>Miller</span> <br />
              Dev Full Stack
            </p>
            <Link to={"/about"} className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais
            </Link>
          </div>
          <figure>
            <img
              className={styles.img_home}
              src="join-profile.svg"
              alt="Imagem Home"
            />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
