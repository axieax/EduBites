import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  Slide,
  Button,
} from "@material-ui/core";

const MATHS = 1;
const ENGLISH = 2;
const HISTORY = 3;

const DUE_DATE = 4;

function Arrow({ direction, onClick }) {
  const icon =
    direction === "left" ? (
      <ChevronLeftIcon fontSize="large" />
    ) : (
      <ChevronRightIcon fontSize="large" />
    );

  return (
    <div onClick={onClick} className={styles.arrow}>
      {icon}
    </div>
  );
}

const tasksData = [
  {
    name: "Brain Teaser",
    locked: true,
    requirement: "Complete two more chapter reviews first",
    topics: [MATHS],
    description:
      "Take on the challenge of solving some Olympiad style questions, where you will need to go beyond what you've already learnt in class.",
    thumbnail: "https://skribbl.io/res/thumbnail.png",
    href: "#",
  },
  {
    name: "Free writing",
    locked: true,
    requirement: "Complete your essay first",
    topics: [ENGLISH],
    description:
      "Embark on a journey where you let your mind take to the wonders of nature... Think outside the box and write creatively about this mysterious topic.",
    thumbnail:
      "https://3.bp.blogspot.com/-mgAcI0Zt1IQ/WIp79lhXo2I/AAAAAAAAMIs/yvLl0zoR9WcsXZWouU1oRi9_ekY-9sT-gCLcB/s1600/Vocabulary%2Bin%2BDictionary.jpeg",
    href: "#",
  },
  {
    name: "History War Trivia",
    locked: true,
    requirement: "Complete your history homework first",
    topics: [HISTORY],
    description:
      "Learn more about the causes of World War II and the emotions of various politicians during that conflicting period of time.",
    thumbnail:
      "https://clermontlibrary.org/wp-content/uploads/2018/09/image-flat-lay-history.jpg",
    href: "#",
  },
];

const BonusBites = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [index, setIndex] = useState(0);
  const content = tasks[index];
  const numSlides = tasks.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState<
    "left" | "right" | "up" | "down"
  >("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        onArrowClick("right");
      }
      if (e.keyCode === 37) {
        onArrowClick("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <Box display="flex" flexWrap="wrap">
        <Typography style={{ marginRight: "2rem" }} variant="h2">
          Bonus Bites Up For Grabs
        </Typography>
        <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
          View All Activities
        </Button>
      </Box>
      <br />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="400px"
          overflow="hidden"
        >
          <Arrow direction="left" onClick={() => onArrowClick("left")} />
          <Slide in={slideIn} direction={slideDirection}>
            <div>
              <a href={content.href} className={styles.cardLink}>
                <div className={styles.card} style={{ margin: 15 }}>
                  <div className={styles.thumbnail}>
                    <img
                      src={
                        content.locked
                          ? "https://i.pinimg.com/474x/8d/ef/60/8def60bd977620a499f504abae7a9b31.jpg"
                          : content.thumbnail
                      }
                    />
                    <div className={styles.bonus}>
                      Complete in 6 day(s) for 5% Bonus Bites!
                    </div>
                  </div>
                  <div className={styles.descriptionSection}>
                    <Typography variant="h3">{content.name}</Typography>
                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                      {content.requirement}
                    </Typography>
                    <Typography variant="body1">
                      {content.description}
                    </Typography>
                  </div>
                </div>
              </a>
            </div>
          </Slide>
          <Arrow direction="right" onClick={() => onArrowClick("right")} />
        </Box>
      </Box>
      <Box mt={1} display="flex" justifyContent="center">
        {tasks.map((task, i) => (
          <div>
            {i === index ? (
              <RadioButtonCheckedIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </div>
        ))}
      </Box>
    </div>
  );
};

export default BonusBites;
