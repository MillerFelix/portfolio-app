import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
          <button className="btn btn-red">Saiba mais</button>
        </div>
        <figure>
          <img className="img-home" src="join-profile.svg" alt="Imagem Home" />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default App;
