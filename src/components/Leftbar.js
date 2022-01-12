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
    marginTop: 5,
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
  active: {
    color: "#f9f9f9",
    backgroundColor: "#1141C4",
    padding: "7px 5px 7px 5px",
    textAlign: "left",
    marginBottom: 0,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 500,
    cursor: "pointer",
    borderRadius: 2,
  },
  inactive: {
    color: "#414141",
    backgroundColor: "transparent",
    padding: "10px 5px 10px 5px",
    textAlign: "left",
    marginBottom: 0,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 500,
    cursor: "pointer",
  },
}));

const Leftbar = ({ tab, setTab }) => {
  const classes = useStyles();
  return (
    <div className="d-flex flex-column px-3 mt-5">
      <div className="mx-2 mb-5 ">
        <img src="/vinlandBlue.png" className={classes.logo}></img>
      </div>
      <div
        className={tab === 0 ? classes.active : classes.inactive}
        onClick={() => setTab(0)}
      >
        <span className={tab === 0 ? classes.active : classes.inactive}>
          <Assessment className={classes.icon} />
          Overview
        </span>
      </div>
      <div
        className={tab === 1 ? classes.active : classes.inactive}
        onClick={() => setTab(1)}
      >
        <span className={tab === 1 ? classes.active : classes.inactive}>
          <Assessment className={classes.icon} />
          NFTs and Games
        </span>
      </div>
      <div
        className={tab === 2 ? classes.active : classes.inactive}
        onClick={() => setTab(2)}
      >
        <span className={tab === 2 ? classes.active : classes.inactive}>
          <Assessment className={classes.icon} />
          Our Motivation
        </span>
      </div>
      <div
        className={tab === 3 ? classes.active : classes.inactive}
        onClick={() => setTab(3)}
      >
        <span className={tab === 3 ? classes.active : classes.inactive}>
          <Assessment className={classes.icon} />
          Our Vision
        </span>
      </div>
      <div
        className={tab === 4 ? classes.active : classes.inactive}
        onClick={() => setTab(4)}
      >
        <span className={tab === 4 ? classes.active : classes.inactive}>
          <Assessment className={classes.icon} />
          Defi and Metaverse
        </span>
      </div>
      <div
        className={tab === 5 ? classes.active : classes.inactive}
        onClick={() => setTab(5)}
      >
        <span className={tab === 5 ? classes.active : classes.inactive}>
          <Assessment className={classes.icon} />
          $VIN Token
        </span>
      </div>
      <div
        className={tab === 6 ? classes.active : classes.inactive}
        onClick={() => setTab(6)}
      >
        <span>
          <Assessment className={classes.icon} />
          Roadmap
        </span>
      </div>
      <div
        className={tab === 7 ? classes.active : classes.inactive}
        onClick={() => setTab(7)}
      >
        <span>
          <Assessment className={classes.icon} />
          Our Team
        </span>
      </div>
    </div>
  );
};

export default Leftbar;
