import React, { useState } from "react";
import { Container, Typography, LinearProgress } from "@material-ui/core";
import styles from "../styles/Activities.module.css";
import { useEffect } from "react";

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
  const [timer, setTimer] = useState(100);
  const [numQuestions, setNumQuestions] = useState(10);

  useEffect(() => {
    let interval = setTimeout(() => {
      setTimer(timer - 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // check loss state
  // if (numQuestions === 0 || timer === 0) {
  //   setScore(0);
  //   setActive(0);
  // }
  // console.log(active);
  // console.log(score, numQuestions);

  const registerSolution = (option: number, correctIndex: number) => {
    console.log("x");
    if (option === correctIndex) {
      setScore((prevState: number) => prevState + 1);
    } else if (active) {
      setActive(0);
      setScore(0);
    }
    if (numQuestions === 1) {
      // reset
      setActive(0);
      setNumQuestions(10);
      // update bites
      setScore(0);
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
        <LinearProgress variant="determinate" value={timer} />
        <Game registerSolution={registerSolution} />
      </section>
    </Container>
  );
}
