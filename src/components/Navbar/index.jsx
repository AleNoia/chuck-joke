// ANCHOR Imports
import React from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HomeIcon from "@material-ui/icons/Home";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SwitchButton from "../Switch";
import { useStyles } from "./styled";
// import Search from "../Search";

// ANCHOR Component
export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="h6"
            noWrap
          >
            Chuck Joke
          </Typography>
          <div className={classes.groupStart}>
            <Link to="/">
              <Button color="secondary">
                <HomeIcon className={classes.icon} />
                <Typography color="textSecondary">Home</Typography>
              </Button>
            </Link>
            <Link to="/piadas">
              <Button color="secondary">
                <ChatBubbleIcon className={classes.icon} />
                <Typography color="textSecondary">Piadas</Typography>
              </Button>
            </Link>
            <Link to="/minhas-piadas">
              <Button color="secondary">
                <BookmarkIcon className={classes.icon} />
                <Typography color="textSecondary">Minhas piadas</Typography>
              </Button>
            </Link>
          </div>
          {/* <Search /> */}
          <SwitchButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
