import React from "react";
import styles from "./styles.module.css";

interface CommonQuestionsProps {
  questions: string[];
}

const CommonQuestions: React.FC<CommonQuestionsProps> = ({ questions }) => {
  return (
    <section className={styles.commonQuestions} aria-label="Common Questions">
      <h2 className={styles.srOnly}>Common Questions</h2>
      <p className={styles.srOnly}>
        The following questions can be answered using the information on this page:
      </p>
      <ol className={styles.srOnly}>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ol>
    </section>
  );
};

export default CommonQuestions;
