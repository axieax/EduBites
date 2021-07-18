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
    name: "Bingo Bongo",
    topic: "Maths",
    description:
      "A fun mathematical game where you can race your friends clearing the board.",
    thumbnail:
      "https://store-images.s-microsoft.com/image/apps.34080.13510798887528624.ea88a7e6-557c-4ad5-99d7-c574f430c827.3c187ff1-754c-409a-9085-8e3aac2d97c5?mode=scale&q=90&h=1080&w=1920",
    href: "/games/bingobongo",
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
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  {game.topic}
                </Typography>
                <Typography variant="h3">{game.name}</Typography>
                <Typography variant="body1">{game.description}</Typography>
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
