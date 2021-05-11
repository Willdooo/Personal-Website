import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  homeWrapper: { height: "100vh", minHeight: "500px", width: "100%" },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit",
    backgroundColor: "red",
  },
  contentText: {
    backgroundColor: "white",
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridTemplateRows: "1fr 3fr 1fr",
    gridTemplateAreas: `
    "head head head"
    "greet name ."
    "foot foot foot"
    `,
    "@media (max-width:760px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  head: {
    gridArea: "head",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greet: {
    gridArea: "greet",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
    paddingTop: "1.3rem",
    textAlign: "center",
    marginRight: "-2rem",
    "@media (max-width:760px)": {
      justifyContent: "center",
      marginRight: "0",
      paddingTop: "0",
    },
  },
  name: {
    gridArea: "name",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  foot: {
    gridArea: "foot",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const input = { ...props.language.home };

  return (
    <div className={classes.homeWrapper} id="home">
      <Header language={props.language.nav} toggle={props.toggle} />
      <div className={classes.contentWrapper}>
        <div className={classes.contentText}>
          <div className={classes.head}>
            <Typography variant="caption">alert("</Typography>
            <Typography variant="h2">{input.greetings}</Typography>
            <Typography variant="caption">")</Typography>
          </div>

          <div className={classes.greet}>
            <Typography variant="h2">{input.greetings2}</Typography>
          </div>

          <div className={classes.name}>
            <Typography variant="h1">{input.name}</Typography>
            <Typography variant="h1">{input.surname}</Typography>
          </div>
          <div className={classes.foot}>
            <Typography variant="h2">{input.frontend}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;