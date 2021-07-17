import React, { useState } from "react";
import Hero from "../components/home/Hero";
import AssignedActivities from "../components/home/AssignedActivities";
import BonusBites from "../components/home/BonusBites";
import ReviewActivities from "../components/home/ReviewActivities";
import UnlockedMinigames from "../components/home/UnlockedMinigames";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function DashBoard() {
  return (
    <section className="dashboard">
      <Hero />
      <br />
      <Container>
        <AssignedActivities />
        <br />
        <BonusBites />
        <br />
        <ReviewActivities />
        <br />
        <UnlockedMinigames />
      </Container>
    </section>
  );
}
