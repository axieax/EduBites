import React, { useState } from "react";

import { Link } from "react-router-dom";

import styles from "../styles/NavBar.module.css";

import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`${classes.root} ${styles.root}`}>
      <AppBar position="sticky" style={{ background: "#85b8a3" }}>
        <Container>
          <Toolbar style={{ padding: "0px" }}>
            <div className={styles.navbar} color="red">
              <div className={styles.left}>
                <Link to="/">
                  <img src="full_logo.png" className={styles.logo} />
                </Link>
              </div>

              <div className={styles.right}>
                <Typography className={styles.points}>1234 Bites</Typography>
                <Link to="/leaderboard">
                  <img src="podium.png" className={styles.icon} />
                </Link>
                <Link to="/game">
                  <img src="store.png" className={styles.icon} />
                </Link>

                <InsertProfileButton
                  classes={classes}
                  handleClick={handleClick}
                  handleClose={handleClose}
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                />
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

function InsertProfileButton({
  classes,
  handleClick,
  handleClose,
  anchorEl,
  setAnchorEl,
}) {
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Advanced</MenuItem>
      </Menu>
    </div>
  );
}
