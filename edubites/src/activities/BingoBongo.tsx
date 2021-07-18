import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/BingoBongo.module.css";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

import Menu from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core";
import board from "../assets/bingoBongoBoard.png";
import profile from "../assets/profile.png";
import info from "../assets/info.png";
import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export default function BingoBongo() {
  return (
    <Container>
      <br />
      <div className={styles.mainWrappper}>
        <br />
        <Typography variant="h2">Bingo Bongo</Typography>
        <Typography variant="h4">Your Score: 15</Typography>
        <br />
        <div className={styles.questionHeader}>
          <Typography variant="h2">Question 1</Typography>
          <div>
            <InsertInfoButton />
          </div>
        </div>

        <div className={styles.bongo}>
          <div className={styles.questionText}>
            <Typography variant="h3">
              A baseball bat and a ball cost $1.10 together, and the bat costs
              $1.00 more than the ball. How much does the ball cost?
            </Typography>
          </div>

          <div className={styles.answerDiv}>
            <form className={styles.answerBox}>
              <TextField
                id="ans"
                name="ans"
                label="Outlined"
                variant="outlined"
              />
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                value="submit"
              >
                <SendIcon />
              </Button>
            </form>
          </div>

          <div className={styles.bongoBoard}>
            <img src={board} className={styles.bongoBoardImg} />
          </div>
        </div>
      </div>
      <br />
      <br />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function InsertInfoButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <img src={info} className={styles.icon} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> Rules </MenuItem>
        <MenuItem onClick={handleClose}> High Scores </MenuItem>
        <MenuItem onClick={handleClose}> Your Statistics </MenuItem>
      </Menu>
    </div>
  );
}
