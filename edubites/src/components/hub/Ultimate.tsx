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
    description: "Be the quickest to guess each other's drawings.",
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
      "Find out who's lying and who's a truly loyal servant of Arthur.",
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
        Ultimate Games - Unlock when you have obtained 1000 Bites
      </Typography>
      <div className={styles.cardSection}>
        <div className={styles.cardBox}>
          {tasks.map((game, key) => (
            <div key={key} className={styles.card}>
              <img src={game.thumbnail} />
              <div className={styles.descriptionSection}>
                <h3>{game.name}</h3>
                <br />
                <h4>{game.topic}</h4>
                <br />
                <p>{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ultimate;
