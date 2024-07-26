import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Contacts.module.css";
import { GoMail } from "react-icons/go";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

function Contacts() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.contacts}>
          <h2>Contatos</h2>
          <h3>Entre em contato</h3>
          <p>Para que possamos conversar mais sobre.</p>
          <div className={styles.icons}>
            <a
              href="mailto:millerredigolo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMail className={styles.icon} />
            </a>
            <a
              href="https://wa.me/5511988670521"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className={styles.icon} />
            </a>
            <a
              href="https://github.com/MillerFelix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/miller-redigolo-felix-6a7a53253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className={styles.icon} />
            </a>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Contacts;
