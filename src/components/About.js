import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProfilePic from "../buildingBlocks/profilephoto_stock.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  aboutwrapper: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "4rem",
    paddingBottom: "2rem",
    zIndex: 10,

    "@media (max-width:1277px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  textwrapper: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "2rem",
    "@media (max-width:1277px)": {
      order: 3,
    },
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: "800",
    marginBottom: "1rem",
    "@media (max-width:1277px)": {
      display: "none",
    },
  },
  text: {
    fontSize: "1.4rem",
    textAlign: "initial",
    paddingLeft: "2rem",
    "@media (max-width:1277px)": {
      paddingTop: "1rem",
      paddingLeft: "3rem",
    },
  },
  img: {
    maxWidth: "500px",
    maxHeight: "auto",
    border: "black 2px solid",
    "@media (max-width:1277px)": {
      maxWidth: "300px",
    },
  },
  imgWrapper: {
    "@media (max-width:1277px)": {
      order: 2,
    },
  },
  smallTitle: {
    display: "none",

    "@media (max-width:1277px)": {
      display: "flex",
      order: 1,
      paddingBottom: "1rem",
      fontFamily: "Montserrat",
      fontWeight: "800",
    },
  },
  text2: {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "800",
  },
}));

const About = (props) => {
  const classes = useStyles();
  const input = { ...props.language };

  return (
    <Grid container id="about" className={classes.aboutwrapper}>
      <Grid item className={classes.smallTitle}>
        <Typography
          className="hvr-float-shadow"
          variant="h2"
          style={{
            marginBottom: "1rem",
            fontFamily: "Montserrat",
            fontWeight: "800",
            textDecoration: "underline",
          }}
        >
          {input.about}
        </Typography>
      </Grid>
      <Grid
        style={{ display: "none" }}
        className={classes.imgWrapper}
        item
        xl={5}
        lg={5}
      >
        <img alt="profilepicture" src={ProfilePic} className={classes.img} />
      </Grid>
      <Grid item xl={7} lg={7} className={classes.textwrapper}>
        <div className={classes.title}>
          <Typography
            className="hvr-float-shadow"
            variant="h2"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "800",
              textDecoration: "underline",
            }}
          >
            {input.about}
          </Typography>
        </div>
        <Typography className={classes.text}>
          {input.text} <br />
          {input.text1}
          <br />
          <br />
          <Typography className={classes.text2}>{input.text2}</Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
