import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { FaGamepad, FaCode, FaToolbox } from "react-icons/fa";
import cvImg from "../buildingBlocks/cvImg.png";
import shopImg from "../buildingBlocks/shopImg.png";
import memoryImg from "../buildingBlocks/memoryImg.png";
import todoImg from "../buildingBlocks/todoImg.png";
import weatherImg from "../buildingBlocks/weatherImg.png";
import calcImg from "../buildingBlocks/calcImg.png";
import etchImg from "../buildingBlocks/etchImg.png";
import restImg from "../buildingBlocks/restImg.png";

const useStyles = makeStyles(() => ({
  projectsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    backgroundColor: "pink",
    paddingTop: "3.5rem",
  },
  gridsContainer: {
    justifyContent: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  itemWrap: {
    minHeight: "500px",
    marginBottom: "1.5rem",
    "@media (max-width:600px)": {
      minHeight: "650px",
    },
  },
  itemPartImg: {
    height: "100%",
    "@media (max-width:960px)": {
      height: "60%",
    },
  },
  divImg: {
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  itemPartText: {
    padding: "0rem 1rem 0rem 1rem",
    display: "flex",
    flexDirection: "column",
  },
  textTitle: {
    paddingTop: "2rem",
    "@media (max-width:960px)": {
      paddingTop: "1rem",
    },
  },
  textText: {
    textAlign: "start",
    paddingBottom: "1rem",
  },

  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "@media (max-width:960px)": {
      padding: "0.5rem 0rem 0rem 0rem",
    },
  },
  button: { fontSize: "2.5rem", margin: "0rem 1rem 0rem 1rem" },
  restProjectsWrap: { width: "75%" },
  restImg: { height: "280px", padding: "0.5rem 1rem 0.25rem 1rem" },
  restDivs: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const input = { ...props.language };

  return (
    <div id="projects" className={classes.projectsWrapper}>
      <div style={{ width: "100%" }}>
        <Typography variant="h2" gutterBottom>
          {input.title1}
        </Typography>
        <Grid container className={classes.gridsContainer}>
          {/** one item */}
          <Grid
            className={classes.itemWrap}
            container
            xl={10}
            lg={10}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              className={classes.itemPartImg}
              item
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
            >
              <div
                className={classes.divImg}
                style={{ backgroundImage: `url(${cvImg})`, height: "100%" }}
              />
            </Grid>
            <Grid
              className={classes.itemPartText}
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <Typography className={classes.textTitle} variant="h7">
                {input.website.title}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                {input.website.text}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                <FaToolbox fontSize="2rem" /> {input.website.tools}
              </Typography>
              <div className={classes.buttonDiv}>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.website.live}
                  target="_blank"
                >
                  <FaGamepad />
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.website.repo}
                  target="_blank"
                >
                  <FaCode />
                </Button>
              </div>
            </Grid>
          </Grid>
          {/** one item*/}
          <Grid
            className={classes.itemWrap}
            container
            xl={10}
            lg={10}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              className={classes.itemPartImg}
              item
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
            >
              <div
                className={classes.divImg}
                style={{ backgroundImage: `url(${cvImg})`, height: "100%" }}
              />
            </Grid>
            <Grid
              className={classes.itemPartText}
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <Typography className={classes.textTitle} variant="h7">
                {input.cv.title}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                {input.cv.text}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                <FaToolbox fontSize="2rem" /> {input.cv.tools}
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
            </Grid>
          </Grid>
          {/** one item*/}
          <Grid
            className={classes.itemWrap}
            container
            xl={10}
            lg={10}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              className={classes.itemPartImg}
              item
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
            >
              <div
                className={classes.divImg}
                style={{ backgroundImage: `url(${shopImg})`, height: "100%" }}
              />
            </Grid>
            <Grid
              className={classes.itemPartText}
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <Typography className={classes.textTitle} variant="h7">
                {input.eshop.title}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                {input.eshop.text}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                <FaToolbox fontSize="2rem" /> {input.eshop.tools}
              </Typography>
              <div className={classes.buttonDiv}>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.eshop.live}
                  target="_blank"
                >
                  <FaGamepad />
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.eshop.repo}
                  target="_blank"
                >
                  <FaCode />
                </Button>
              </div>
            </Grid>
          </Grid>
          {/** one item*/}
          {/** one item*/}
          <Grid
            className={classes.itemWrap}
            container
            xl={10}
            lg={10}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              className={classes.itemPartImg}
              item
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
            >
              <div
                className={classes.divImg}
                style={{ backgroundImage: `url(${memoryImg})`, height: "100%" }}
              />
            </Grid>
            <Grid
              className={classes.itemPartText}
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <Typography className={classes.textTitle} variant="h7">
                {input.memory.title}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                {input.memory.text}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                <FaToolbox fontSize="2rem" /> {input.memory.tools}
              </Typography>
              <div className={classes.buttonDiv}>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.memory.live}
                  target="_blank"
                >
                  <FaGamepad />
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.memory.repo}
                  target="_blank"
                >
                  <FaCode />
                </Button>
              </div>
            </Grid>
          </Grid>
          {/** one item*/}
          <Grid
            className={classes.itemWrap}
            container
            xl={10}
            lg={10}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              className={classes.itemPartImg}
              item
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
            >
              <div
                className={classes.divImg}
                style={{ backgroundImage: `url(${todoImg})`, height: "100%" }}
              />
            </Grid>
            <Grid
              className={classes.itemPartText}
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <Typography className={classes.textTitle} variant="h7">
                {input.todo.title}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                {input.todo.text}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                <FaToolbox fontSize="2rem" /> {input.todo.tools}
              </Typography>
              <div className={classes.buttonDiv}>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.todo.live}
                  target="_blank"
                >
                  <FaGamepad />
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.todo.repo}
                  target="_blank"
                >
                  <FaCode />
                </Button>
              </div>
            </Grid>
          </Grid>
          {/** one item*/}
          {/** one item*/}
          <Grid
            className={classes.itemWrap}
            container
            xl={10}
            lg={10}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              className={classes.itemPartImg}
              item
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
            >
              <div
                className={classes.divImg}
                style={{
                  backgroundImage: `url(${weatherImg})`,
                  height: "100%",
                }}
              />
            </Grid>
            <Grid
              className={classes.itemPartText}
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <Typography className={classes.textTitle} variant="h7">
                {input.weather.title}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                {input.weather.text}
              </Typography>
              <Typography className={classes.textText} variant="body1">
                <FaToolbox fontSize="2rem" /> {input.weather.tools}
              </Typography>
              <div className={classes.buttonDiv}>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.weather.live}
                  target="_blank"
                >
                  <FaGamepad />
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  href={input.weather.repo}
                  target="_blank"
                >
                  <FaCode />
                </Button>
              </div>
            </Grid>
          </Grid>
          {/** one item*/}
        </Grid>
      </div>
      <div className={classes.restProjectsWrap}>
        <Typography variant="h4" gutterBottom>
          {input.title2}
        </Typography>
        <div className={classes.restDivs}>
          <div>
            <a href={input.calculator.live} target="_blank" rel="noreferrer">
              <img alt="pic" src={calcImg} className={classes.restImg} />
            </a>
            <a href={input.calculator.repo} target="_blank" rel="noreferrer">
              <Typography variant="h5">{input.calculator.title}</Typography>
            </a>
          </div>
          <div>
            <a href={input.sketch.live} target="_blank" rel="noreferrer">
              <img alt="pic" src={etchImg} className={classes.restImg} />
            </a>
            <a href={input.sketch.repo} target="_blank" rel="noreferrer">
              <Typography variant="h5">{input.sketch.title}</Typography>
            </a>
          </div>
          <div>
            <a href={input.restaurant.live} target="_blank" rel="noreferrer">
              <img alt="pic" src={restImg} className={classes.restImg} />{" "}
            </a>
            <a href={input.restaurant.repo} target="_blank" rel="noreferrer">
              <Typography variant="h5">{input.restaurant.title}</Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
