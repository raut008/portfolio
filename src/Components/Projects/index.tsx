import type { FC } from "react";
import { memo } from "react";
import styles from "./index.module.scss";

export type Project = {
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string; // GitHub Pages or live demo
  tech?: string[];
  image?: string;
};

interface CardListProps {
  projects?: Project[];
  ariaLabel?: string;
}

/* small helper to detect array */
const isArray = (v: unknown): v is string[] => Array.isArray(v);

/* sensible defaults — replace these with your real project JSON */
const defaultProjects: Project[] = [
  {
    title: "Movie Chat Bot",
    description:
      "A conversational movie assistant built with Next.js, Perplexity AI API, and MongoDB Vertex Search. Users can chat about movies, get recommendations, and search movie data in real-time.",
    githubUrl: "https://github.com/your-username/movie-chat-bot",
    demoUrl: "https://movie-chat-bot.vercel.app",
    tech: ["Next.js", "Perplexity AI", "MongoDB Vertex Search", "TypeScript"],
    image: undefined,
  },
  {
    title: "TicTacToe Game",
    description: "Classic TicTacToe game implemented in React. Features responsive UI and local state management for two-player gameplay.",
    githubUrl: "https://github.com/your-username/react-tictactoe",
    demoUrl: "https://your-username.github.io/react-tictactoe",
    tech: ["React", "TypeScript", "CSS"],
    image: undefined,
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio built with React + Vite and deployed on GitHub Pages.",
    githubUrl: "https://github.com/your-username/portfolio",
    demoUrl: "https://your-username.github.io/portfolio",
    tech: ["React", "Vite", "SCSS"],
    image: undefined,
  },
];

const CardItem: FC<{ p: Project }> = ({ p }) => {
  return (
    <li className={styles["card__item"]}>
      {p.image ? (
        <div className={styles["card__media"]} role="img" aria-label={p.title} style={{ backgroundImage: `url(${p.image})` }} />
      ) : (
        <div className={styles["card__media"]} aria-hidden="true" />
      )}

      <div className={styles["card__body"]}>
        <h3 className={styles["card__title"]}>{p.title}</h3>
        <p className={styles["card__desc"]}>{p.description}</p>

        {isArray(p.tech) && p.tech.length > 0 && (
          <ul className={styles["card__tech"]} aria-hidden="false">
            {p.tech.map((t) => (
              <li key={t} className={styles["card__tech-item"]}>
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className={styles["card__links"]}>
          {p.demoUrl && (
            <a className={styles["card__link"]} href={p.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          )}
          {p.githubUrl && (
            <a className={styles["card__link"]} href={p.githubUrl} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

const Projects: FC<CardListProps> = ({ projects = defaultProjects, ariaLabel = "Projects list" }) => {
  return (
    <section id="projects" className={styles.card} aria-label={ariaLabel}>
      <h2 className={styles["card__heading"]}>Projects</h2>
      <ul className={styles["card__list"]}>
        {projects.map((p, i) => (
          <CardItem key={`${p.title}-${i}`} p={p} />
        ))}
      </ul>
    </section>
  );
};

export default memo(Projects);
