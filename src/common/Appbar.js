import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import DotCircle from "../components/DotCircle";
import CustomButton from "./CustomButton";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  tabs: {
    color: "white",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    paddingRight: 10,
    fontWeight: 500,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.05vw",
  },
  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    backgroundColor: "transparent",
  },
  menuIcon: {
    color: "#212121",
  },
  list: {
    width: "250px",
    borderLeft: "5px solid pink",
    borderColor: theme.palette.pbr.primary,
    height: "100%",
    backgroundColor: "transparent",
  },
  fullList: {
    width: "auto",
  },
  menuTitle: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    textAlign: "left",
    fontSize: 16,
  },
  menuTitlePink: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    textAlign: "left",
    fontSize: 16,
    color: theme.palette.pbr.primary,
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: "none",
  },
  mobileButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    color: "#ffffff",
    padding: "5px 15px 5px 15px",
    fontWeight: 600,
  },
}));

export default function MainAppbar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: "How It Works", id: "how-it-works" },
          { name: "Team", id: "team" },
          { name: "Roadmap", id: "roadmap" },
        ].map((tab, index) => (
          <Link
            activeClass="active"
            to={tab.id}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            <ListItem
              button
              key={tab.name}
              onClick={toggleDrawer(anchor, false)}
            >
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            name: "Read Whitepaper",
            id: "/doc",
          },
        ].map((tab, index) => (
          <a href={tab.id} target="_blank" className={classes.mobileLink}>
            <ListItem button key={tab.name}>
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </a>
        ))}
        <ListItem button>
          <a href="/docs" target="_blank" style={{ textDecoration: "none" }}>
            <ListItemText
              primary={"Read Whitepaper"}
              className={classes.menuTitlePink}
            />
          </a>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{ background: "rgba(0, 0, 0, 0.1)", boxShadow: "none" }}
      >
        <Toolbar
          className="d-flex justify-content-between"
          style={{ paddingLeft: "7%", paddingRight: "7%" }}
        >
          <Typography className={classes.title} variant="h6" noWrap>
            <img src="vinlandWhite.png" alt="logo" height="60px" />
          </Typography>
          <div className="d-flex justify-content-end">
            <Link
              activeClass="active"
              to="how-it-works"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
            >
              <Typography className={classes.tabs} variant="body1" noWrap>
                How It Works <DotCircle />
              </Typography>
            </Link>
            <Link
              activeClass="active"
              to="for-projects"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
            >
              <Typography className={classes.tabs} variant="body1">
                Collaborate <DotCircle />
              </Typography>
            </Link>

            <Link
              activeClass="active"
              to="roadmap"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
            >
              <Typography className={classes.tabs} variant="body1">
                Roadmap <DotCircle />
              </Typography>
            </Link>
            <Link
              activeClass="active"
              to="partners"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
            >
              <Typography className={classes.tabs} variant="body1">
                Partners <DotCircle />
              </Typography>
            </Link>
            <Link
              activeClass="active"
              to="social"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
            >
              <Typography className={classes.tabs} variant="body1">
                Social Links <DotCircle />
              </Typography>
            </Link>

            <div className={classes.sectionDesktop}>
              <CustomButton
                title={"Read Whitepaper"}
                link={"/docs"}
              ></CustomButton>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <div>
              <img src="logo.png" alt="logo" height="50px" />
            </div>

            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="Menu"
                    aria-haspopup="true"
                    className={classes.menuIcon}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
