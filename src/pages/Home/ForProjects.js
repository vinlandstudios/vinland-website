import { makeStyles } from "@material-ui/core/styles";
import {
  AttachMoney,
  Gavel,
  GroupWork,
  LocalOffer,
  Whatshot,
} from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 10,
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: "left",
    fontSize: 42,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
    fontSize: 50,
    fontWeight: 700,
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 50,
    textAlign: "left",
    width: "80%",
    fontSize: 18,
    lineHeight: 1.8,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  icon: {
    fontSize: 16,
    color: theme.palette.pbr.primary,
    marginRight: 5,
    marginTop: -5,
  },

  title: {
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 16,
  },
  blockSpacing: {
    paddingLeft: 10,
    marginTop: 15,
  },
  imageContainer: {
    width: "80%",
    height: "fit-content",
    borderRadius: 10,

    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      width: "100%",
    },
  },
  pointer: { paddingBottom: 10 },
  ul: {
    lineHeight: 2,
    paddingLeft: 15,
  },
  li: {
    textDecoration: "none",
    outline: "none",

    "list-style-type": "none",
  },
}));
export default function ForProjects() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row g-0 flex-column-reverse flex-md-row">
        <div className="col-md-6 col-sm-12 col-sm-push-4 ">
          <Fade left>
            <div>
              <img
                src="https://metaverseland.app/images/banner.png"
                alt="logo"
                className={classes.imageContainer}
              />
            </div>
          </Fade>
        </div>
        <div className="col-md-6 col-sm-12 col-sm-pull-4">
          <Fade right>
            <h6 className={classes.heading}>Find your</h6>
            <h3 className={classes.highlight}> CryptoCitizens</h3>
            <p className={classes.para}>
              Use Vinland to attract new users and stakeholders for your
              community. Vinland allows projects to distribute tokens to users
              through proof-of-use. Gain customers, honest feedback and testing
              by real users.
            </p>
            <p className={classes.para}>
              Gain customers, honest feedback and testing by real users. Gain
              customers, honest feedback and testing by real users. Gain
              customers, honest feedback and testing by real users.
            </p>
            <ul className={classes.ul}>
              <li className={classes.li}>
                ✅ <span style={{ paddingLeft: 10 }}>Easy Traction</span>
              </li>
              <li className={classes.li}>
                ✅ <span style={{ paddingLeft: 10 }}>User Testing</span>{" "}
              </li>
              <li className={classes.li}>
                ✅ <span style={{ paddingLeft: 10 }}>Honest Feedback</span>{" "}
              </li>
              <li className={classes.li}>
                ✅ <span style={{ paddingLeft: 10 }}>Quick User growth</span>{" "}
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
}
