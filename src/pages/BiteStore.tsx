import React, { useState } from "react";
import Avatar from "../components/store/Avatar";
import Educational from "../components/store/Educational";
import Ultimate from "../components/store/Ultimate";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function BiteStore() {
  return (
    <section className="dashboard">
      <Container>
        <br />
        <Typography variant="h2" align="center">
          Bite Store
        </Typography>
        <Avatar />
        <br />
        <Educational />
        <br />
        <Ultimate />
        <br />
      </Container>
    </section>
  );
}
