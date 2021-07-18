import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import { Typography } from "@material-ui/core";

const tasksData = [
  {
    name: "Sporcle",
    topic: "Trivia",
    description:
      "Take quizzes to improve your general knowledge, such as learning the flags of the world.",
    thumbnail:
      "https://d31xsmoz1lk3y3.cloudfront.net/images/big/default.jpg?v=10104",
    href: "https://www.sporcle.com/",
  },
  {
    name: "Crossword",
    topic: "Puzzle",
    description:
      "Improve your vocabulary and trivia knowledge by solving these crossword puzzles.",
    thumbnail:
      "https://www.researchgate.net/profile/Angel-Abuelo/publication/301621212/figure/fig1/AS:357989061021697@1462362652095/Example-of-a-crossword-puzzle-The-crossword-puzzle-was-presented-in-an-html-environment_Q640.jpg",
    href: "https://thenewdaily.com.au/puzzles/quiz-crossword/",
  },
  {
    name: "Minesweeper",
    topic: "Logic",
    description:
      "Break your personal records at finding all the squares do not contain mines.",
    thumbnail: "https://minesweeper.online/img/homepage/expert.png",
    href: "https://minesweeperonline.com/",
  },
  {
    name: "Whodunnit",
    topic: "Logic",
    description:
      "Use your logic to deduce to committed the murder from the clues provided.",
    thumbnail:
      "https://www.mysterytribune.com/wp-content/uploads/2020/03/16-Best-Crime-And-Mystery-Board-Games-Around-2020-Edition.jpg",
    href: "https://www.huntakiller.com/",
  },
  {
    name: "Soduku",
    topic: "Puzzle",
    description:
      "A classic puzzle where you need to place the numbers 1-9 so they only appear once in every row, column and diagonal",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png",
    href: "https://sudoku.com/",
  },
];

const Educational = () => {
  const [tasks, setTasks] = useState(tasksData);
  return (
    <div>
      <br />
      <Typography variant="h3" component="h3">
        Earn Bites while learning here! Try out our educational games
      </Typography>
      <div className={styles.cardSection}>
        <div className={styles.cardBox}>
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
        </div>
      </div>
    </div>
  );
};

export default Educational;
