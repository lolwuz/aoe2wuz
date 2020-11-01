import {
  Avatar,
  Backdrop,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MessageIcon from "@material-ui/icons/Message";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  chat: {
    position: "fixed",
    right: 0,
    top: 0,
    height: "100vh",
    width: 400,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderLeft: `solid 1px ${theme.palette.background.default}`,
  },
  fab: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    zIndex: theme.zIndex.drawer + 1,
  },
  replyBox: {
    bottom: theme.spacing(12),
    left: theme.spacing(1),
    right: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const Chat = () => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    /**
     * Check if clicked outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Backdrop open={open} className={classes.backdrop}>
        <div className={classes.chat} ref={wrapperRef}>
          <Typography variant="h6">Login to chat</Typography>
          <div className={classes.replyBox}>
            {false && (
              <TextField variant="outlined" multiline fullWidth rows={3} />
            )}
          </div>
          <List>
            {[
              { name: "Marten", text: "Lorem Ipsum Dorem Set Amir" },
              { name: "Henk", text: "Lorem Ipsum Dorem Set Amir" },
              { name: "Jan Pieter", text: "Lorem Ipsum Dorem Set Amir" },
            ].map((message) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="" variant="rounded" alt={message.name} />
                </ListItemAvatar>
                <ListItemText primary={message.name} secondary={message.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Backdrop>

      {!open && (
        <Fab
          color={open ? "default" : "primary"}
          className={classes.fab}
          onClick={() => toggleChat()}
        >
          <MessageIcon />
        </Fab>
      )}
    </div>
  );
};

export default Chat;
