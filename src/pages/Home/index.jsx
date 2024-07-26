import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentation">
          <p>
            Olá, sou <br />
            <span>Miller</span> <br />
            Dev Full Stack
          </p>
          <Link to={"/sobre"} className="btn btn-red">
            Saiba mais
          </Link>
        </div>
        <figure>
          <img className="img-home" src="join-profile.svg" alt="Imagem Home" />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default Home;
