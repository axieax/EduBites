import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { Container, Typography } from "@material-ui/core";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="hero.jpg" alt="hero" className={styles.heroImage} />
      <div className={styles.heroContent}>
        <Container>
          <Typography variant="h1">Welcome Back, Bob!</Typography>
          <Typography variant="h2" className={styles.stats}>
            Your current rank: 4th <br />
            Incomplete tasks: 6
          </Typography>
        </Container>
      </div>
    </section>
  );
}
