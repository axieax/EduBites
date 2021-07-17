import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "../styles/Activities.module.css";

const operations = ["+", "-", "*", "%"];

const Game = ({ registerSolution }) => {
  let randomLeft = Math.floor(Math.random() * 13);
  let randomRight = Math.floor(Math.random() * 13);
  let randomOperation =
    operations[Math.floor(Math.random() * operations.length)];
  let randomSolution = eval(`${randomLeft} ${randomOperation} ${randomRight}`);

  let options: number[] = [];
  while (options.length !== 4) {
    let randomOption = Math.floor(Math.random() * 100);
    let randomSign = Math.round(Math.random()) * 2 - 1;
    randomOption *= randomSign;
    if (!options.includes(randomOption) && randomOption !== randomSolution) {
      options.push(randomOption);
    }
  }
  let correctIndex = Math.floor(Math.random() * 4);
  options[correctIndex] = randomSolution;

  return (
    <div>
      <div className={styles.questions}>
        <Typography variant="h3">
          {randomLeft} {randomOperation === "*" ? "x" : randomOperation}{" "}
          {randomRight} {"= ?"}
        </Typography>
      </div>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            className={styles.option}
            key={index}
            onClick={() => registerSolution(index, correctIndex)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const GameReset = ({ setActive }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.resetContent}>
        Reset
        <br />
        <button onClick={() => setActive((prevActive) => !prevActive)}>
          Start
        </button>
      </div>
    </div>
  );
};

export default function MentalMaths() {
  const [active, setActive] = useState(0);
  const [score, setScore] = useState(0);
  const [numQuestions, setNumQuestions] = useState(10);

  const resetGame = () => {
    // reset
    setActive(0);
    setNumQuestions(10);
    // update bites
    setScore(0);
  };

  const registerSolution = (option: number, correctIndex: number) => {
    if (option === correctIndex) {
      setScore((prevState: number) => prevState + 1);
    } else if (active) {
      resetGame();
    }
    if (numQuestions === 1) {
      resetGame();
    } else {
      setNumQuestions((prevNumQuestions: number) => prevNumQuestions - 1);
    }
  };

  return (
    <Container>
      <section className={styles.mentalMathsSection}>
        {!active && <GameReset setActive={setActive} />}
        <Typography variant="h2">Mental Maths</Typography>
        <Typography variant="h4">Your Score: {score}</Typography>
        <Game registerSolution={registerSolution} />
      </section>
    </Container>
  );
}
