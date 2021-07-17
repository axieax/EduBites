import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

const tasksData = [
  {
    name: "Skribblio",
    topic: "Art",
    description:
      "Guess each other's drawings in the shortest amount of time - be nice!",
    thumbnail: "https://skribbl.io/res/thumbnail.png",
    href: "https://www.skribbl.io/",
  },
  {
    name: "Typeracer",
    topic: "Typing",
    description:
      "Race each other in typing - remember, you have to type the words correctly!",
    thumbnail:
      "https://assets2.rockpapershotgun.com/typeracer.jpg/BROK/resize/880%3E/format/jpg/quality/80/typeracer.jpg",
    href: "https://play.typeracer.com/",
  },
  {
    name: "Avalon",
    topic: "Critical Thinking",
    description:
      "Discuss and find out who's lying and who's truly a loyal servant of Arthur.",
    thumbnail:
      "https://images.saymedia-content.com/.image/t_share/MTc0NDE3NDkxNzc3Mjk5ODE2/how-to-play-avalon.jpg",
    href: "https://avalon.fun/",
  },
];

const Ultimate = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [option, setOption] = useState("");
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <br />
      <Typography variant="h3" component="h3">
        Ultimate Games! Unlock with Bites
      </Typography>
      <div className={styles.cardSection}>
        <div className={styles.cardBox}>
          {tasks.map((game, key) => (
            <div
              key={key}
              className={styles.card}
              style={{ opacity: 0.9, background: "#777" }}
            >
              <div className={styles.thumbnail}>
                <img src={game.thumbnail} />
                <div className={styles.lock}>
                  <img src="https://static.thenounproject.com/png/10982-200.png" />
                </div>
              </div>
              <div className={styles.descriptionSection}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  {game.topic}
                </Typography>
                <Typography variant="h3">{game.name}</Typography>
                <Typography variant="body1">{game.description}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ultimate;
