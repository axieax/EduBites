import React from "react";
import styles from "../styles/ChatOverlay.module.css";
import ChatIcon from "@material-ui/icons/Chat";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ChatOverlay() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.chatBox}>
      <Button
        variant="outlined"
        startIcon={<ChatIcon />}
        style={{ padding: "1rem 4rem" }}
        onClick={handleClickOpen}
      >
        Chat <span className={styles.alert}>(1)</span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use EduBites' Chat Feature?"}
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
          <Button onClick={handleClose} color="primary" autoFocus>
            Disagree
          </Button>
          <Button color="primary">Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
