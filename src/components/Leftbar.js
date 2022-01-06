import { Avatar, makeStyles } from "@material-ui/core";
import {
  Assessment,
  Info,
  LiveHelp,
  SettingsApplications,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tab: {
    color: "#000000",
    textAlign: "left",
    marginBottom: 0,
    marginTop: 15,
    fontSize: 18,
    fontWeight: 500,
    cursor: "pointer",
  },
  logo: {
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      height: 50,
    },
  },
  icon: {
    marginRight: 10,
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <div className="d-flex flex-column px-3 mt-5">
      <div className="mb-5">
        <img src="/vinlandWhite.png" className={classes.logo}></img>
      </div>
      <div className={classes.tab}>
        <Link to="/docs" style={{ color: "white" }}>
          <Assessment className={classes.icon} />
          Introduction
        </Link>
      </div>
      <div className={classes.tab}>
        <Link to="/docs/nft" style={{ color: "white" }}>
          <SettingsApplications className={classes.icon} />
          Game Overview
        </Link>
      </div>
      <div className={classes.tab}>
        <Link to="/docs/motivation" style={{ color: "white" }}>
          <SettingsApplications className={classes.icon} />
          Expansion
        </Link>
      </div>
      <div className={classes.tab}>
        <Link to="/docs/token" style={{ color: "white" }}>
          <SettingsApplications className={classes.icon} />
          Our Team
        </Link>
      </div>
      <div className={classes.tab}>
        <Link to="/docs/roadmap" style={{ color: "white" }}>
          <SettingsApplications className={classes.icon} />
          Tokenomics
        </Link>
      </div>
      <div className={classes.tab}>
        <Link to="/docs/team" style={{ color: "white" }}>
          <SettingsApplications className={classes.icon} />
          Roadmap
        </Link>
      </div>
    </div>
  );
};

export default Leftbar;
