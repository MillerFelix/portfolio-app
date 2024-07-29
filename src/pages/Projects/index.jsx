import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projects.module.css";

function Projects() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const findRepositories = async () => {
      const response = await fetch(
        "https://api.github.com/users/MillerFelix/repos?page=1&per_page=50"
      );
      const data = await response.json();
      setRepositories(data);
    };
    findRepositories();
  }, []);

  return (
    <section className={styles.projects}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={styles.list}>
          {repositories.map((repository) => (
            <Card
              key={repository.id}
              name={repository.name}
              description={repository.description}
              html_url={repository.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Projects;
