import React, { useState } from "react";

import { Link } from "react-router-dom";

import styles from "../styles/NavBar.module.css";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import full_logo from "../assets/full_logo.png";
import podium from "../assets/podium.png";
import store from "../assets/store.png";
import profile from "../assets/profile.png";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

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
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

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
                  <img src={full_logo} className={styles.logo} />
                </Link>
              </div>

              <div className={styles.right}>
                <Typography className={styles.points}>1234 Bites</Typography>

                <div onClick={handleClickOpen} className={styles.podium}>
                  <img src={podium} className={styles.icon} />
                </div>
                <Link to="/bitestore">
                  <img src={store} className={styles.icon} />
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
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use EduBites' Leaderboard Feature?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You need to upgrade to Premium in order to unlock this feature,
            along with many other functionalities useful for a school
            environment. Please proceed to our purchases page if you would like
            to confirm a monthly subscription.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary" autoFocus>
            Disagree
          </Button>
          <Button color="primary" onClick={handleClickClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
        <img src={profile} className={styles.icon} />
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
