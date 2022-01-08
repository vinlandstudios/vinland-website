import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    backgroundColor: "#191A20",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
    },
  },
  heading: {
    backgroundColor: "white",
    width: "fit-content",

    padding: "10px 50px 10px 10px;",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    color: "white",
    textAlign: "left",
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
    letterSpacing: "-0.2px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "left",
    color: "white",
    lineHeight: 2,
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
export default function Motivation() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h4 className={classes.heading}>
          <strong className={classes.highlight}>
            Motivation behind Vinland:
          </strong>
        </h4>
      </div>
      <div>
        <p className={classes.para}>
          We firmly believe DeFi is the best product that blockchains have
          produced till date and has the power to bring high quality, censorship
          resistant and borderless financial products to billions. Similar to
          the concept of Vinland in Norse philosophy - a new found land by
          Vikings that promised vast opportunities - we want to channel that
          promise to increase discoverability of protocols via our project.
        </p>
        <p className={classes.para}>
          The team behind Vinland has vast experience with scaling DeFi of
          Polygon and API3 thru this year. They helped Polygon ecosystem to grow
          over 100x in 6 months (number of protocol deployments and 100x in
          DAU). The mission was to bring DeFiForAll and we created a bustling
          ecosystem with DeFi composability. In the course of successful
          completion of the mission, we realised new users are having a lot of
          issues with wallets, RPCs. Also with web wallets, essentially you are
          not increasing the pie but just recycling the present user base (~3M
          wallets). Games have historically been the best onramp for the new
          users in any nascent technology to get accustomed to. Implementation
          of meta transactions for in game interactions, easy on-ramp off-ramp
          with mobile wallets is the way ahead. All the above points sound good,
          but the bigger problem is of cold start in the current state of
          metaverse - getting the initial wave of users is tricky. This has not
          been solved, although partially by governance token emissions - but
          sticky recurring community interactions is a greenfield problem.
        </p>
      </div>
    </div>
  );
}
