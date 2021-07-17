import React from "react";
import { Container } from "@material-ui/core";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <img src="full_logo.png" alt="logo" className={styles.logo} />
      </Container>
    </footer>
  );
}
