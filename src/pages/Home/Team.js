import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, LinkedIn, Telegram, Twitter } from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 5,
    textAlign: "center",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 22,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: "center",
    color: theme.palette.pbr.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,

      paddingBottom: 3,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },

  icon: {
    fontSize: 24,
    color: "#616161",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },

  people: {
    paddingTop: 30,
    width: 220,
    [theme.breakpoints.down("sm")]: {
      width: 160,
    },
  },
  peopleSmall: {
    paddingTop: 40,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    boxShadow: "5px 5px 4px 5px #bdbdbd",
    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
    },
  },
  avatarSmall: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    boxShadow: "5px 5px 4px 5px #888888",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
    },
  },
}));
export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="text-center">
        <h4 className={classes.heading}>
          Our <strong className={classes.highlight}>Team</strong>
        </h4>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-2">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="./images/team/tahir.jpg"
                    alt="Asif"
                    className={classes.avatar}
                  />
                  <h6 className={classes.title}>Asif Khan</h6>
                  <p className={classes.para}>CEO & Co-Founder</p>

                  <Tooltip title="Telegram">
                    <a href="https://t.me/cyclese_polkabridge">
                      <IconButton aria-label="Telegram">
                        <Telegram className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <a href="https://www.linkedin.com/in/cyclese-mohr-8bb396225/">
                      <IconButton aria-label="LinkedIn">
                        <LinkedIn className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2">
              <Fade right>
                <div className={classes.people}>
                  <img
                    src="./images/team/tahir.jpg"
                    alt="Aamir"
                    className={classes.avatar}
                  />
                  <h6 className={classes.title}>Ashar Shahid</h6>
                  <p className={classes.para}>CTO & Co-founder</p>
                  <Tooltip title="LinkedIn">
                    <a href="https://www.linkedin.com/in/aamir-alam/">
                      <IconButton aria-label="LinkedIn">
                        <LinkedIn className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <a href="https://github.com/AamirAlam">
                      <IconButton aria-label="GitHub">
                        <GitHub className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                </div>
              </Fade>
            </div>
            <div className="col-6 col-md-2">
              <Fade right>
                <div className={classes.people}>
                  <img
                    src="./images/team/tahir.jpg"
                    alt="Hamzah"
                    className={classes.avatar}
                  />
                  <h6 className={classes.title}>Hamzah Khan</h6>
                  <p className={classes.para}>Advisor from Polygon</p>
                  <Tooltip title="Github">
                    <a href="https://github.com/amirsiddiquiin">
                      <IconButton aria-label="Github">
                        <GitHub className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                </div>
              </Fade>
            </div>
            <div className="col-6 col-md-2">
              <Fade right>
                <div className={classes.people}>
                  <img
                    src="./images/team/tahir.jpg"
                    alt="Tahir"
                    className={classes.avatar}
                  />
                  <h6 className={classes.title}>Tahir Ahmad</h6>
                  <p className={classes.para}>CMO & Co-founder</p>
                  <Tooltip title="LinkedIn">
                    <a href="https://www.linkedin.com/in/tahirahmadin/">
                      <IconButton aria-label="LinkedIn">
                        <LinkedIn className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                  <Tooltip title="Github">
                    <a href="https://github.com/tahirahmadin">
                      <IconButton aria-label="Github">
                        <GitHub className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                  <Tooltip title="Twitter">
                    <a href="https://twitter.com/tahirahmadin">
                      <IconButton aria-label="Twitter">
                        <Twitter className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                </div>
              </Fade>
            </div>
            <div className="col-6 col-md-2">
              <Fade right>
                <div className={classes.people}>
                  <img
                    src="./images/team/javier.jpg"
                    alt="Javier"
                    className={classes.avatar}
                  />
                  <h6 className={classes.title}>Raghib </h6>
                  <p className={classes.para}>Senior BlockChain Engineer</p>
                  <Tooltip title="LinkedIn">
                    <a href="https://www.linkedin.com/in/javier-delgado-b057b7166">
                      <IconButton aria-label="LinkedIn">
                        <LinkedIn className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                  <Tooltip title="Twitter">
                    <a href="https://twitter.com/psychonautrip2">
                      <IconButton aria-label="Twitter">
                        <Twitter className={classes.icon} />
                      </IconButton>
                    </a>
                  </Tooltip>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
