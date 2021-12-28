import { Button } from "@material-ui/core";
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
    color: "#1141C4",
    textAlign: "left",
    fontSize: 22,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },

  highlight: {
    color: "#f9f9f9",
    fontSize: 36,
    marginleft: 10,
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
    fontSize: 20,
    lineHeight: 2,
    color: "white",
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
  cardPartner: {
    padding: 30,
    minHeight: 250,
    display: "flex",
    alignItems: "center",
    background: `linear-gradient(to right,#1141C4, #1141d9)`,
    width: "auto",
    background: `linear-gradient(90deg,
      rgba(0, 0, 0, 0.91),
      rgba(0, 0, 3, 0.8)
    ),
    url("https://ichef.bbci.co.uk/news/976/cpsprodpb/0150/production/_120763300_gettyimages-1284836641-1.jpg") no-repeat center center
      fixed`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 30,
    [theme.breakpoints.down("sm")]: {},
  },
  applyButton: {
    backgroundColor: "#1141C4",
    borderRadius: "50px",
    color: "white",
    textTransform: "none",
  },
}));
export default function Collaborate() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.cardPartner}>
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-start justify-content-center ">
            <Fade left>
              <div className="px-5">
                <h6 className={classes.heading}>Introducing</h6>
                <h3 className={classes.highlight}>Partner's Program</h3>
              </div>
            </Fade>
          </div>
          <div className="col-md-7">
            <Fade left>
              <div className="px-5">
                <p className={classes.para}>
                  If you’re a community that’s looking to educate your members
                  on crypto applications, reach out to us to discuss how we can
                  work together.
                </p>
                <Button variant="contained" className={classes.applyButton}>
                  Apply Here
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
