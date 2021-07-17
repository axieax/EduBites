import React from "react";
import { Container } from "@material-ui/core";
import styles from "../styles/Footer.module.css";
import full_logo from "../assets/full_logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <img src={full_logo} alt="logo" className={styles.logo} />
      </Container>
    </footer>
  );
}
