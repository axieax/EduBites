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

const MATHS = 1;
const ENGLISH = 2;
const HISTORY = 3;

const DUE_DATE = 4;

const tasksData = [
  {
    name: "Quizzes",
    topic: "Mathematics, Science",
    description: "Test your ability to solve quadratic equations here!",
    thumbnail: "https://blog.hubspot.com/hubfs/google-quiz.jpg",
    href: "#",
  },
  {
    name: "Videos",
    topic: "Mathematics, Science",
    description: "Learn how to balance chemical equations here!",
    thumbnail:
      "https://educational-innovation.sydney.edu.au/teaching@sydney/wp-content/uploads/2017/09/shutterstock_279396767-e1504271826302-770x578.jpg",
    href: "#",
  },
  {
    name: "Flashcards",
    topic: "English, History",
    description: "Memorise your Shakespearean quotes here!",
    thumbnail: "https://image3.slideserve.com/5784331/slide50-l.jpg",
    href: "#",
  },
];

const AssignedActivities = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <div>
      <Box display="flex" flexWrap="wrap">
        <Typography style={{ marginRight: "2rem" }} variant="h2">
          Review
        </Typography>
        <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
          View All Activities
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

export default AssignedActivities;
