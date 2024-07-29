import styles from "./About.module.css";
import avatar from "./images/avatar.png";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import react from "./images/icon-react.svg";
import node from "./images/icon-node.svg";
import sql from "./images/icon-sql.svg";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.texts}>
          <h2>Sobre</h2>
          <p>
            <span>Sou Miller Felix</span>
            <br />
            <strong>Dev Full Stack</strong>
          </p>
          <br />
          <p>Atuando em desenvolvimento desde os 17 anos.</p>
          <p>Apaixonado por programação e tecnologia.</p>
          <p>Criação de interfaces de usuário e sistemas back-end.</p>
          <br />
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icons}>
          <img src={html} alt="Ícone HTML" />
          <img src={css} alt="Ícone CSS" />
          <img src={js} alt="Ícone JS" />
          <img src={react} alt="Ícone REACT" />
          <img src={node} alt="Ícone NODE" />
          <img src={sql} alt="Ícone SQL" />
        </div>
      </div>
    </section>
  );
}

export default About;
