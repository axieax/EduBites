import React from "react";
import { Container } from "@material-ui/core";

const ChatBox = () => {
  return <div>chat</div>;
};

const FaceCamSection = () => {
  return <div>face</div>;
};

const Game = () => {
  return (
    <Container>
      <ChatBox />
      <FaceCamSection />
    </Container>
  );
};

export default Game;
