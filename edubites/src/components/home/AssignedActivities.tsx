import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

// const MATHS = 1;
// const ENGLISH = 2;
// const HISTORY = 3;
// const SCIENCE = 5;

const DUE_DATE = 1;

const tasksData = [
  {
    name: "History Research",
    due: "19/07/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed neque a quam tempus pellentesque. Aliquam sodales tristique lacus eu.",
    thumbnail:
      "https://clermontlibrary.org/wp-content/uploads/2018/09/image-flat-lay-history.jpg",
    href: "/game",
  },
  {
    name: "English Definitions",
    due: "20/07/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed neque a quam tempus pellentesque. Aliquam sodales tristique lacus eu.",
    thumbnail:
      "https://3.bp.blogspot.com/-mgAcI0Zt1IQ/WIp79lhXo2I/AAAAAAAAMIs/yvLl0zoR9WcsXZWouU1oRi9_ekY-9sT-gCLcB/s1600/Vocabulary%2Bin%2BDictionary.jpeg",
    href: "/game",
  },
  {
    name: "Mental Mathematics",
    due: "16/07/2021",
    description:
      "Master your mathematical proficiency by practising speed addition, subtraction, multiplication and modular arithmetic in this activity!",
    thumbnail:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/af461bb4-e4b7-4c64-a216-10966b9d09ce",
    href: "/activities/mentalmaths",
  },
  {
    name: "Experiment Draft",
    due: "26/07/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed neque a quam tempus pellentesque. Aliquam sodales tristique lacus eu.",
    thumbnail:
      "https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkaa1wo/sizes/science-wrong_resize_md.jpg",
    href: "/game",
  },
  {
    name: "Maths Homework",
    due: "21/07/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed neque a quam tempus pellentesque. Aliquam sodales tristique lacus eu.",
    thumbnail: "https://cdn.cdnparenting.com/articles/2018/06/471582446_H.jpg",
    href: "/game",
  },
  {
    name: "Scientific Report",
    due: "10/08/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed neque a quam tempus pellentesque. Aliquam sodales tristique lacus eu.",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/6KqoosBmrTZo09dl9_iIxQhhMsTjikS_2hQxo-WSvXo8Qvfip6GK7DnAIU5Be4EJAmQT6g7NtYCFFaKUUAaj7q-Qk4dPx2IYoqnfdEt5jDvOu6pxoDZO1A",
    href: "/game",
  },
];

const AssignedActivities = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [option, setOption] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleChange = (e) => {
    setTasks((prevState) => {
      if (e.target.value === DUE_DATE)
        prevState.sort((a, b) => {
          let a_split = a.due.split("/");
          let b_split = b.due.split("/");
          return (
            parseInt(a_split[2]) - parseInt(b_split[2]) ||
            parseInt(a_split[1]) - parseInt(b_split[1]) ||
            parseInt(a_split[0]) - parseInt(b_split[0])
          );
        });
      else return tasksData;
      return prevState;
    });
    setOption(e.target.value);
  };
  return (
    <div>
      <Typography variant="h2">Your Assigned Activities</Typography>
      <Box>
        Sort by:{" "}
        <Select
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          onChange={handleChange}
          value={option}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={DUE_DATE}>Due Date</MenuItem>
        </Select>
      </Box>
      <div className={styles.cardSection}>
        <div className={styles.cardBox}>
          {tasks.map((game, key) => (
            <a href={game.href} className={styles.cardLink}>
              <div key={key} className={styles.card}>
                <img src={game.thumbnail} />
                <div className={styles.descriptionSection}>
                  <Typography variant="h3">{game.name}</Typography>
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    Due: {game.due}
                  </Typography>
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

export default AssignedActivities;
