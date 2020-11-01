import {
  Avatar,
  Divider,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { signOut } from "next-auth/client";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
    right: theme.spacing(3),
    top: theme.spacing(1.5),
  },
  dropdown: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(1),
    width: 360,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[10],
  },
  avatar: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    margin: "auto",
    width: 60,
    height: 60,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

export default function UserAvatar({ user }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const name = user.name || user.email;

  return (
    <>
      <Avatar
        src={user.image}
        alt={name}
        className={classes.button}
        onClick={() => setOpen(!open)}
      >
        {name}
      </Avatar>
      <Grow in={open} style={{ transformOrigin: "top right" }}>
        <div className={classes.dropdown}>
          <IconButton
            className={classes.closeButton}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <Avatar
            src={user.image}
            alt={name}
            onClick={() => setOpen(true)}
            className={classes.avatar}
          >
            {name}
          </Avatar>
          <Typography variant="subtitle1">Logged in as {name}</Typography>
          <Typography variant="subtitle1"></Typography>

          <List>
            <Divider />
            <ListItem>
              <ListItemText primary="Account" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Build Orders" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="My account" />
            </ListItem>
            <Divider />
            <ListItem button onClick={signOut}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Grow>
      )}
    </>
  );
}
