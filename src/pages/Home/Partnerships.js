import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 35,
    paddingTop: 60,

    [theme.breakpoints.down("sm")]: {
      paddingBottom: 35,
    },
  },

  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
    textAlign: "center",
  },
  partner: {
    flex: "25%",
    height: "32px",
    [theme.breakpoints.down("sm")]: {
      flex: " 50%",
    },
  },
  imageWrapper: {
    padding: 15,
    height: "64px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapperBMW: {
    padding: 10,
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapperNew: {
    padding: 10,
    height: "45px",
    [theme.breakpoints.down("sm")]: {
      height: "4px",
      padding: 10,
    },
  },
  listingsWrapper: {
    maxWidth: 700,
  },
  listingsWrappe2: {
    maxWidth: 900,
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
  highlight: {
    color: theme.palette.pbr.primary,
  },
}));
export default function Partnerships() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Our <span className={classes.highlight}> Proud Partners</span>
      </h6>

      <div className={classes.listingsWrapper2}>
        <div className="mt-1 row d-flex align-items-center text-center">
          <div className="col-6 col-md-3">
            <a href="https://aave.com/">
              <img
                src="https://www.cryptocoinzone.com/wp-content/uploads/2021/11/Aave-logo.png"
                alt="aave"
                className={classes.imageWrapper}
              />
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a href="https://polygon.technology/">
              <img
                src="images/polygon.svg"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a href="https://www.nftport.xyz/">
              <img
                src="https://assets.website-files.com/60f51fac359e025bed0dd19b/6173ff84da7f630e1961bc98_new%20logo.png"
                alt="logo"
                className={classes.imageWrapperNew}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
