import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import Educational from "../components/hub/Educational";
import Ultimate from "../components/hub/Ultimate";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function GamesHub() {
  return (
    <section className="dashboard">
      <Container>
        <Educational />
        <br />
        <Ultimate />
      </Container>
    </section>
  );
}
