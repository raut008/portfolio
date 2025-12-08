import type { FC } from "react";
import { memo } from "react";
import styles from "./index.module.scss";

export type Project = {
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  tech?: string[];
  image?: string;
};

interface CardListProps {
  projects?: Project[];
  ariaLabel?: string;
}

const defaultProjects: Project[] = [
  {
    title: "Movie Chat Bot",
    description:
      "A conversational movie assistant built with Next.js, Perplexity AI API, and MongoDB Vertex Search.",
    githubUrl: "https://github.com/your-username/movie-chat-bot",
    demoUrl: "https://movie-chat-bot.vercel.app",
    tech: ["Next.js", "Perplexity AI", "MongoDB", "TypeScript"],
  },
  {
    title: "TicTacToe Game",
    description:
      "Classic TicTacToe game implemented in React with responsive UI and two-player mode.",
    githubUrl: "https://github.com/your-username/react-tictactoe",
    demoUrl: "https://your-username.github.io/react-tictactoe",
    tech: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio built with React + Vite.",
    githubUrl: "https://github.com/your-username/portfolio",
    demoUrl: "https://your-username.github.io/portfolio",
    tech: ["React", "Vite", "SCSS"],
  },
];

const CardItem: FC<{ p: Project }> = ({ p }) => {
  return (
    <div className={styles.card__item}>
      <div
        className={styles.card__media}
        role={p.image ? "img" : undefined}
        aria-label={p.image ? p.title : undefined}
        style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
      />

      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{p.title}</h3>
        <p className={styles.card__desc} title={p.description}>
          {p.description}
        </p>

        {p.tech?.length && (
          <div className={styles.card__tech}>
            {p.tech.map((t) => (
              <span key={t} className={styles.card__techItem}>
                {t}
              </span>
            ))}
          </div>
        )}

        <div className={styles.card__links}>
          {p.demoUrl && (
            <a
              className={styles.card__link}
              href={p.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          )}
          {p.githubUrl && (
            <a
              className={styles.card__link}
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: FC<CardListProps> = ({
  projects = defaultProjects,
  ariaLabel = "Projects list",
}) => (
  <section id="projects" className={styles.card} aria-label={ariaLabel}>
    <h2 className={styles.card__heading}>Projects</h2>

    <div className={styles.card__list}>
      {projects.map((p, i) => (
        <CardItem key={p.title + i} p={p} />
      ))}
    </div>
  </section>
);

export default memo(Projects);
