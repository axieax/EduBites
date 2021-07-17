import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/BingoBongo.module.css";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function BingoBongo() {
  return (
    <Container>
      <div className={styles.mainWrappper}>
        <div className={styles.questionHeader}>
          <Typography variant="h2"> Question 1 </Typography>

          <div>
            <Typography> Points: 15</Typography>
            <InsertInfoButton />
          </div>
        </div>
        <img src="mathQuestion.png" />

        <form>
          <label>
            Answer:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <img src="bingoBongoBoard.png" />
      </div>
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
        <img src="profile.png" className={styles.icon} />
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
