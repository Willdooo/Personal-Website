import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import {
  FaHtml5,
  FaCode,
  FaTools,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { SiAdobephotoshop, SiAdobelightroomcc } from "react-icons/si";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    padding: "3.5rem 1.5rem 0rem 1.5rem",
    textAlign: "center",
    justifyContent: "center",
  },
  skillwrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem 1.5rem 1rem 1.5rem",
    minHeight: "300px",
  },
  bigIcon: {
    fontSize: "6rem",
    marginBottom: "1rem",
  },
  smallIcon: {
    fontSize: "4rem",
  },
  skillsHolder: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  specificskill: {
    padding: "1rem",
  },
}));

const Skills = (props) => {
  const classes = useStyles();
  const input = { ...props.language };
  const [progress, setProgress] = React.useState(50);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 98 ? 0 : prevProgress + 1
      );
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const CircularProgressWithLabel = (pog) => {
    return (
      <Box display="inline-flex">
        <CircularProgress
          style={{ color: "#ffb300" }}
          variant="determinate"
          {...pog}
        />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography
            variant="caption"
            component="div"
            color="#ffb300"
            style={{ fontSize: "1rem" }}
          >{`${Math.round(pog.value)}%`}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Grid container className={classes.root} id="skills">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography
          className="hvr-float-shadow"
          style={{ marginBottom: "1rem" }}
          variant="h2"
        >
          {input.skills}
        </Typography>
      </Grid>
      <Grid className="hvr-bob" item xl={4} lg={4} md={6} sm={6} xs={12}>
        <Paper className={classes.skillwrap}>
          <Typography variant="h3"> {input.front}</Typography>
          <Icon className={classes.bigIcon}>
            <MdWeb />
          </Icon>
          <div className={classes.skillsHolder}>
            <div className={classes.specificskill}>
              <Icon className={classes.smallIcon}>
                <FaHtml5 />
              </Icon>
              <Typography variant="body1">HTML</Typography>
            </div>
            <div className={classes.specificskill}>
              <Icon className={classes.smallIcon}>
                <FaCss3Alt />
              </Icon>
              <Typography variant="body1">CSS</Typography>
            </div>
            <div className={classes.specificskill}>
              <Icon className={classes.smallIcon}>
                <FaJsSquare />
              </Icon>
              <Typography variant="body1">JavaScript</Typography>
            </div>
            <div className={classes.specificskill}>
              <Icon className={classes.smallIcon}>
                <FaReact />
              </Icon>
              <Typography variant="body1">React</Typography>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid className="hvr-bob" item xl={4} lg={4} md={6} sm={6} xs={12}>
        <Paper className={classes.skillwrap}>
          <Typography variant="h3"> {input.back}</Typography>
          <Icon className={classes.bigIcon}>
            <FaCode />
          </Icon>
          <Typography
            variant="h4"
            gutterBottom
            style={{ paddingBottom: "1rem" }}
          >
            {input.soon}
          </Typography>
          <CircularProgressWithLabel value={progress} />
        </Paper>
      </Grid>
      <Grid className="hvr-bob" item xl={4} lg={4} md={6} sm={6} xs={12}>
        <Paper className={classes.skillwrap}>
          <Typography variant="h3"> {input.others}</Typography>
          <Icon className={classes.bigIcon}>
            <FaTools />
          </Icon>
          <div className={classes.skillsHolder}>
            <div className={classes.specificskill}>
              <Icon className={classes.smallIcon}>
                <FaGitAlt />
              </Icon>
              <Typography variant="body1">git</Typography>
            </div>
            <div className={classes.specificskill}>
              <Icon className={classes.smallIcon}>
                <SiAdobephotoshop />
              </Icon>
              <Typography variant="body1">Photoshop</Typography>
            </div>
            <div className={classes.specificskill}>
              <Icon className={classes.smallIcon}>
                <SiAdobelightroomcc />
              </Icon>
              <Typography variant="body1">Lightroom</Typography>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Skills;
