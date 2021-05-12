import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { FaGamepad, FaCode } from "react-icons/fa";
import cvImg from "../buildingBlocks/cvImg.png";

const useStyles = makeStyles(() => ({
  projectsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    backgroundColor: "pink",
  },
  gridContainer: { justifyContent: "center" },
  projectPaper: {
    margin: "1rem 2rem 1rem 2rem",
    display: "flex",
    flexDirection: "row",
    height: "400px",
    "@media (max-width:980px)": {
      flexDirection: "column",
      height: "auto",
    },
  },
  textDiv: {
    display: "flex",
    flexDirection: "column",
    marginRight: "1rem",
    marginLeft: "1rem",
    "@media (max-width:980px)": {
      height: "100%",
    },
  },
  textTitle: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    "@media (max-width:980px)": {
      height: "auto",
    },
  },
  textText: {
    height: "200px",
    display: "flex",
    textAlign: "start",
    "@media (max-width:980px)": {
      height: "auto",
    },
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "@media (max-width:980px)": {
      padding: "1.5rem 0rem 2rem 0rem",
    },
  },
  button: { fontSize: "3rem", margin: "0rem 1rem 0rem 1rem" },
  imgWrapper: {
    width: "150%",
    backgroundImage: "cover",
    "@media (max-width:980px)": {
      width: "100%",
    },
  },
  imgProject: { width: "100%", height: "100%" },
}));

const Projects = (props) => {
  const classes = useStyles();
  const input = { ...props.language };

  return (
    <div id="projects" className={classes.projectsWrapper}>
      <div style={{ width: "100%" }}>
        <Typography variant="h2">{input.title1}</Typography>
        <Grid container className={classes.gridContainer}>
          <Grid item xl={6} lg={8} md={12} sm={12} xs={12}>
            <Paper className={classes.projectPaper}>
              <div className={classes.imgWrapper}>
                <img
                  src={cvImg}
                  className={classes.imgProject}
                  alt="projectscreen"
                />
              </div>

              <div className={classes.textDiv}>
                <Typography className={classes.textTitle} variant="h6">
                  {input.cv.title}
                </Typography>
                <Typography className={classes.textText} variant="body1">
                  {input.cv.text}
                </Typography>
                <div className={classes.buttonDiv}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    href={input.cv.live}
                    target="_blank"
                  >
                    <FaGamepad />
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.button}
                    href={input.cv.repo}
                    target="_blank"
                  >
                    <FaCode />
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xl={6} lg={8} md={12} sm={12} xs={12}>
            <Paper className={classes.projectPaper}>
              <img alt="second project" />
              <div> second project</div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div style={{ width: "100%" }}>
        <Typography variant="h4">{input.title2}</Typography>
      </div>
    </div>
  );
};

export default Projects;
