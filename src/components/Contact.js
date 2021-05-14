import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import cvENG from "../buildingBlocks/cvProgrammingENG.pdf";
import cvCZ from "../buildingBlocks/cvProgrammingCZ.pdf";

const useStyles = makeStyles(() => ({
  contactWrapper: {
    position: "relative",
    width: "100%",
    textAlign: "center",
    paddingTop: "3rem",
    height: "100vh",
    zIndex: 9,
  },
  contentWrapper: { width: "75" },
  infoWrap: {
    display: "flex",
    flexDirection: "column",
    height: "80%",
    justifyContent: "space-evenly",
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const input = { ...props.language };
  const setCV = () => {
    if (input.title === "Kontakt") {
      return cvCZ;
    } else {
      return cvENG;
    }
  };

  return (
    <div id="contact" className={classes.contactWrapper}>
      <div>
        <Typography
          className="hvr-float-shadow"
          variant="h2"
          style={{
            paddingTop: "2rem",
            marginBottom: "2rem",
            fontFamily: "Montserrat",
            fontWeight: "800",
            textDecoration: "underline",
          }}
        >
          {input.title}
        </Typography>
      </div>
      <div className={classes.infoWrap}>
        <Typography variant="h3">
          wollmada@gmail.com <FiMail />
        </Typography>

        <Typography variant="h3">
          <a
            href="https://linkedin.com/in/daniel-wollmann"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            LinkedIn <FaLinkedin />
          </a>
        </Typography>

        <Typography variant="h3">
          <a
            href="https://github.com/Willdooo"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub <FaGithub />
          </a>
        </Typography>

        <Typography variant="h3">
          <a href={setCV()} target="_blank" rel="noreferrer">
            CV <FaRegFilePdf />{" "}
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Contact;
