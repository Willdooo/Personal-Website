import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  homeWrapper: { height: "100vh", minHeight: "500px" },
  contentText: { paddingTop: "50px" },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.homeWrapper} id="home">
      <Header language={props.language.nav} />
      <div className={classes.contentText}>Home</div>
    </div>
  );
};

export default Home;
