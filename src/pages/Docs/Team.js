import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    backgroundColor: "#ffffff",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
    },
  },
  heading: {
    width: "fit-content",
    color: "#1041C4",
    textAlign: "left",
    fontSize: 36,
    fontWeight: 500,
    verticalAlign: "middle",

    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",

    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "left",
    color: "black",
    lineHeight: 2,
    fontWeight: 500,
    fontSize: 17,

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  title: {
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 16,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  focusContainer: {
    border: "1px solid #888888",
    padding: 10,
    borderRadius: "7px",
    marginBottom: 10,
  },
  imageContainer: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      width: "100%",
    },
  },

  logoWrapper: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    marginRight: 15,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #bdbdbd",
    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
      marginRight: 5,
    },
  },
  ethLogo: {
    height: 25,
    [theme.breakpoints.down("sm")]: {
      height: 20,
    },
  },
  polygonLogo: {
    height: 25,
    [theme.breakpoints.down("sm")]: {
      height: 20,
    },
  },
  contractAddress: {
    fontSize: 16,

    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
}));

export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h4 className={classes.heading}>
          <strong className={classes.highlight}>Our Team</strong>
        </h4>
      </div>
      <div>
        <p className={classes.para}>
          The core team members have been core contributors in some of the top
          cutting edge blockchain projects , leading key initiatives in projects
          like Polygon, API3 and leading metaverse games on BSC. The graphics
          layer has been worked upon by personnel leading various shader
          initiatives in Qualcomm.
        </p>
      </div>
    </div>
  );
}
