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
    fontSize: 66,
  },
  para: {
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 50,
    textAlign: "left",
    fontSize: 20,
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
    width: "95%",
    borderRadius: 10,

    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      width: "100%",
    },
  },
  pointer: { paddingBottom: 10 },
}));
export default function PBRToken() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row g-0 flex-column-reverse flex-md-row">
        <div className="col-md-6 col-sm-12 col-sm-push-4 ">
          <Fade left>
            <div>
              <img
                src="https://investorplace.com/wp-content/uploads/2021/11/metaverse.jpg"
                alt="logo"
                className={classes.imageContainer}
              />
            </div>
          </Fade>
        </div>
        <div className="col-md-6 col-sm-12 col-sm-pull-4">
          <Fade right>
            <h6 className={classes.heading}>
              Help educate new{" "}
              <strong className={classes.highlight}>cryptocitizens</strong>
            </h6>
            <p className={classes.para}>
              If you’re a community that’s looking to educate your members on
              crypto applications, reach out to us on discord to discuss how we
              can work together.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
