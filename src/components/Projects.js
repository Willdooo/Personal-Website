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
import webImg from "../buildingBlocks/webImg.png";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
  projectsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    paddingTop: "3.5rem",
  },
  gridsContainer: {
    justifyContent: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  itemWrap: {
    minHeight: "550px",
    marginBottom: "2.5rem",
    borderTop: "5px solid",
    borderBottom: "3px solid",
    borderRight: "1px solid",
    borderLeft: "1px solid",

    "@media (max-width:960px)": {
      borderTop: "0px",
      borderLeft: "1px solid",
      borderBottom: "5px solid",
      borderRight: "1px solid",
    },
    "@media (max-width:1500px)": {
      marginBottom: "3.5rem",
    },
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
    justifyContent: "center",
  },
  textTitle: {
    "@media (max-width:960px)": {
      paddingTop: "1rem",
    },
  },
  textText: {
    textAlign: "start",
    paddingBottom: "1rem",
    paddingTop: "1rem",
    alignSelf: "center",
  },

  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "@media (max-width:960px)": {
      padding: "0.5rem 0rem 1rem 0rem",
    },
  },
  button: {
    padding: "0rem 2rem 0rem 2rem",
  },
  restProjectsWrap: { width: "75%", zIndex: 10 },
  restImg: { height: "280px", padding: "0.5rem 1rem 0.25rem 1rem" },
  restDivs: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  dividers: {
    background: "#f8efd4",
    height: "4px",
    marginBottom: "1rem",
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const input = { ...props.language };

  return (
    <div id="projects" className={classes.projectsWrapper}>
      <div style={{ width: "100%" }}>
        <Typography
          variant="h2"
          className="hvr-float-shadow"
          style={{
            marginBottom: "2rem",
            fontFamily: "Montserrat",
            fontWeight: "800",
            textDecoration: "underline",
          }}
        >
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
                style={{ backgroundImage: `url(${webImg})`, height: "100%" }}
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
              <Typography className={classes.textTitle} variant="h5">
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
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 202, 46)",
                    backgroundColor: "#404040",
                  }}
                  href={input.website.live}
                  target="_blank"
                >
                  <FaGamepad style={{ fontSize: "2.5rem" }} />
                </Button>
                <Button
                  variant="contained"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 238, 188)",
                    backgroundColor: "#404040",
                  }}
                  className="hvr-pulse-grow"
                  href={input.website.repo}
                  target="_blank"
                >
                  <FaCode style={{ fontSize: "2.5rem" }} />
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
              <Typography className={classes.textTitle} variant="h5">
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
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 202, 46)",
                    backgroundColor: "#404040",
                  }}
                  href={input.cv.live}
                  target="_blank"
                >
                  <FaGamepad style={{ fontSize: "2.5rem" }} />
                </Button>
                <Button
                  variant="contained"
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 238, 188)",
                    backgroundColor: "#404040",
                  }}
                  href={input.cv.repo}
                  target="_blank"
                >
                  <FaCode style={{ fontSize: "2.5rem" }} />
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
              <Typography className={classes.textTitle} variant="h5">
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
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 202, 46)",
                    backgroundColor: "#404040",
                  }}
                  href={input.eshop.live}
                  target="_blank"
                >
                  <FaGamepad style={{ fontSize: "2.5rem" }} />
                </Button>
                <Button
                  variant="contained"
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 238, 188)",
                    backgroundColor: "#404040",
                  }}
                  href={input.eshop.repo}
                  target="_blank"
                >
                  <FaCode style={{ fontSize: "2.5rem" }} />
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
                  backgroundImage: `url(${memoryImg})`,
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
              <Typography className={classes.textTitle} variant="h5">
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
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 202, 46)",
                    backgroundColor: "#404040",
                  }}
                  href={input.memory.live}
                  target="_blank"
                >
                  <FaGamepad style={{ fontSize: "2.5rem" }} />
                </Button>
                <Button
                  variant="contained"
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 238, 188)",
                    backgroundColor: "#404040",
                  }}
                  href={input.memory.repo}
                  target="_blank"
                >
                  <FaCode style={{ fontSize: "2.5rem" }} />
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
            style={{ marginBottom: "4rem" }}
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
              <Typography className={classes.textTitle} variant="h5">
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
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 202, 46)",
                    backgroundColor: "#404040",
                  }}
                  href={input.todo.live}
                  target="_blank"
                >
                  <FaGamepad style={{ fontSize: "2.5rem" }} />
                </Button>
                <Button
                  variant="contained"
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 238, 188)",
                    backgroundColor: "#404040",
                  }}
                  href={input.todo.repo}
                  target="_blank"
                >
                  <FaCode style={{ fontSize: "2.5rem" }} />
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
              <Typography className={classes.textTitle} variant="h5">
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
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 202, 46)",
                    backgroundColor: "#404040",
                  }}
                  href={input.weather.live}
                  target="_blank"
                >
                  <FaGamepad style={{ fontSize: "2.5rem" }} />
                </Button>
                <Button
                  variant="contained"
                  className="hvr-pulse-grow"
                  style={{
                    margin: "0rem 1rem 0rem 1rem",
                    color: "rgb(255, 238, 188)",
                    backgroundColor: "#404040",
                  }}
                  href={input.weather.repo}
                  target="_blank"
                >
                  <FaCode style={{ fontSize: "2.5rem" }} />
                </Button>
              </div>
            </Grid>
          </Grid>
          {/** one item*/}
        </Grid>
      </div>
      <Divider
        style={{
          height: "1px",
          background: "#f8efd4",
          width: "60%",
          marginBottom: "1rem",
        }}
      />
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
              <Typography variant="h5">
                {input.calculator.title} <FaCode />
              </Typography>
            </a>{" "}
            <Divider className={classes.dividers} />
          </div>
          <div>
            <a href={input.sketch.live} target="_blank" rel="noreferrer">
              <img alt="pic" src={etchImg} className={classes.restImg} />
            </a>
            <a href={input.sketch.repo} target="_blank" rel="noreferrer">
              <Typography variant="h5">
                {input.sketch.title} <FaCode />
              </Typography>
            </a>{" "}
            <Divider className={classes.dividers} />
          </div>
          <div>
            <a href={input.restaurant.live} target="_blank" rel="noreferrer">
              <img alt="pic" src={restImg} className={classes.restImg} />{" "}
            </a>
            <a href={input.restaurant.repo} target="_blank" rel="noreferrer">
              <Typography variant="h5">
                {input.restaurant.title} <FaCode />
              </Typography>
            </a>
            <Divider className={classes.dividers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
