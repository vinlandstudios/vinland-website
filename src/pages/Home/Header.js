import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {
  CallToAction,
  MonetizationOn,
  ShutterSpeed,
  YouTube,
} from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 130,
    paddingLeft: "7%",
    paddingRight: "7%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      textAlign: "center",
    },
  },

  header: {
    minHeight: "80vh",
    width: "auto",
    background: `linear-gradient(90deg,
      rgba(0, 0, 0, 0.91),
      rgba(0, 0, 3, 0.6)
    ),
    url("https://ichef.bbci.co.uk/news/976/cpsprodpb/0150/production/_120763300_gettyimages-1284836641-1.jpg") no-repeat center center
      fixed`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("sm")]: {
      height: "85vh",
    },
  },

  heading: {
    color: "white",
    width: "80%",
    paddingTop: 100,
    textAlign: "left",
    fontSize: "54px",
    fontWeight: 600,
    lineHeight: 1.3,
    verticalAlign: "middle",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  subheading: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    color: "white",
    marginTop: 25,
  },
  highlight: {
    color: "#1141C4",
  },
  para: {
    width: "90%",
    paddingTop: 15,
    fontWeight: 300,
    color: "white",
    letterSpacing: 0.6,
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to right,#1141C4,#1141C4)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: -0.5,
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "10px 15px 10px 15px",
    fontWeight: 400,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  buttonWhite: {
    borderRadius: "50px",
    border: "1px solid #f9f9f9",
    background: `transparent`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: -0.5,
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "10px 15px 10px 15px",
    fontWeight: 400,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <section>
        <div className={classes.header}>
          <div className={classes.spacing}>
            <div className="row w-100">
              <div className="col-md-6 mt-3">
                <Pulse>
                  <h1 className={classes.heading}>
                    Experience evolving
                    <span className={classes.highlight}> Defi </span> in
                    Metaverse.
                  </h1>
                  <p className={classes.para}>
                    The metaverse is the next evolution of interaction, and we
                    are powering the metaverse with Finance.
                  </p>
                  <div className="d-flex">
                    <div className="mt-3">
                      <a
                        href="https://youtu.be/xYnK5nbwkkM"
                        style={{ textDecoration: "none", padding: 5 }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          Take A Tour
                        </Button>
                      </a>
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://youtu.be/xYnK5nbwkkM"
                        style={{ textDecoration: "none", padding: 5 }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.buttonWhite}
                        >
                          Join Discord
                        </Button>
                      </a>
                    </div>
                  </div>
                </Pulse>
              </div>
              <div className="col-md-6">
                <div>
                  <img
                    src="https://thenemesis.io/img/metaverse/metaverse-village.png"
                    alt="image"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
