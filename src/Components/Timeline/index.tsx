import type { FC } from "react";
import { memo } from "react";
import styles from "./index.module.scss";

type TimelineStep = {
  label: string;
  date: string;
  description: string | string[];
};

const defaultTimelineSteps: TimelineStep[] = [
  {
    label: "Tata Consultancy Services",
    date: "17 July 2019 - 7 December 2021",
    description: [
      "Focused on front-end development using React, building responsive and accessible user interfaces for banking applications.",
      "Participated in deployment processes, ensuring smooth delivery and release of features in a secure environment.",
      "Collaborated closely with cross-functional teams to align UI features with business and compliance requirements.",
    ],
  },
  {
    label: "Jio Platforms",
    date: "8 December 2021 - Present",
    description: [
      "Developed and maintained web applications using Angular, React, and Next.js, leveraging both CSR and SSR approaches for performance and SEO optimization.",
      "Implemented SEO best practices across applications to improve discoverability and user engagement.",
      "Built and deployed smart TV applications for Tizen, webOS, and VIDAA platforms, ensuring high performance and a seamless user experience across devices.",
      "Containerized applications using Docker for consistency across development, testing, and production environments.",
      "Automated CI/CD workflows with Azure Pipelines, enabling faster and more reliable deployments.",
      "Recently explored working with Large Language Models (LLMs) for integrating AI-driven features and improving product capabilities.",
      "Gained hands-on experience with MongoDB for data modeling, querying, and supporting scalable backend services.",
    ],
  },
];

interface TimelineProps {
  steps?: TimelineStep[];
  ariaLabel?: string;
}

const isArray = (v: unknown): v is string[] => Array.isArray(v);

const TimelineItem: FC<{ step: TimelineStep; index: number }> = ({ step }) => {
  const itemClass = `${styles["timeline__item"]}`;

  return (
    <li className={itemClass}>
      <span className={styles["timeline__dot"]} aria-hidden="true" />
      <div className={styles["timeline__content"]}>
        <h3 className={styles["timeline__label"]}>{step.label}</h3>
        <time className={styles["timeline__date"]} dateTime={step.date}>
          {step.date}
        </time>
        {isArray(step.description) ? (
          <ul className={styles["timeline__description-list"]}>
            {step.description.map((d, i) => (
              <li key={i} className={styles["timeline__description-item"]}>
                {d}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles["timeline__description-text"]}>{step.description}</p>
        )}
      </div>
    </li>
  );
};

const Timeline: FC<TimelineProps> = ({ steps = defaultTimelineSteps, ariaLabel = "Work timeline" }) => {
  return (
    <section id="experience" className={styles.timeline} aria-label={ariaLabel}>
      <h2 className={styles["timeline__heading"]}>Timeline.</h2>
      <ol className={styles["timeline__list"]}>
        {steps.map((step, idx) => (
          <TimelineItem key={`${step.label}-${idx}`} step={step} index={idx} />
        ))}
      </ol>
    </section>
  );
};

export default memo(Timeline);
