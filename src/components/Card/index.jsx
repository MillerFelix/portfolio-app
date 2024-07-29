import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

function Card() {
  return (
    <section className={styles.card}>
      <h3>Título do Projeto</h3>
      <p>Texto descritivo do projeto.</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icons}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
        <button className={styles.card_button}>
          <BsArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Card;
