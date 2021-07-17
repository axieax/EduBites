import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const tasksData = [
  {
    name: "Skribble.io",
    topic: "Art",
    description: "Be the quickest to guess each other's drawings.",
    thumbnail: "https://skribbl.io/res/thumbnail.png",
    href: "https://www.skribbl.io/",
  },
  {
    name: "Tetris",
    topic: "Arcade",
    description: "A classic, yet addicting tile-matching video game.",
    thumbnail:
      "https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Nintendo%20Switch/Games/Tetris%2099/Video/posters/Switch_Tetris99_2020_AvailNow_0814-_H264_30k",
    href: "https://tetris.com/play-tetris/",
  },
];

const UnlockedMinigames = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <div>
      <Box display="flex" flexWrap="wrap">
        <Typography style={{ marginRight: "2rem" }} variant="h2">
          Your Unlocked Minigames
        </Typography>
        <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
          Spend Your Bites
        </Button>
      </Box>
      <br />
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {tasks.map((game, key) => (
          <a
            href={game.href}
            className={styles.cardLink}
            style={{ margin: 10 }}
          >
            <div key={key} className={styles.card}>
              <img src={game.thumbnail} />
              <div className={styles.descriptionSection}>
                <Typography variant="h3" component="h3">
                  {game.name}
                </Typography>
                <br />
                <h3>{game.topic}</h3>
                <br />
                <Typography variant="body2" component="p">
                  {game.description}
                </Typography>
              </div>
            </div>
          </a>
        ))}
      </Box>
      <br />
      <br />
      <br />
    </div>
  );
};

export default UnlockedMinigames;
