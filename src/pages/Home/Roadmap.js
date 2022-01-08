import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccountBalance,
  ChevronLeft,
  ChevronRight,
  CloudQueue,
  Description,
  GroupWork,
  LocalFlorist,
  SettingsEthernet,
  SwapHoriz,
  Timer,
} from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 40,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
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
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },

  imageContainer: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      width: "100%",
    },
  },
  scroll: {},
  roadmapWrapper: {
    display: "flex",
    width: "100%",
    scrollbarWidth: 0,
    overflowX: "scroll",
  },
  quarterWrapper: {
    width: 250,
  },
  lineMaker: {
    display: "flex",
    justifyContent: "center",
    width: 225,
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      width: 180,
    },
  },
  baseline: {
    display: "flex",
    alignSelf: "center",
    height: 5,
    width: "100%",
    backgroundColor: theme.palette.pbr.primary,
    verticalAlign: "baseline",
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: theme.palette.pbr.primary,
    borderRadius: "50%",
  },
  icon: {
    fontSize: 48,
    color: "#616161",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
  },
  details: {},
  title: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  quarterText: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    color: theme.palette.pbr.primary,
  },
  list: {
    width: 200,
    paddingLeft: 15,
    fontSize: 14,
  },
}));
export default function Roadmap({ color = "black" }) {
  const classes = useStyles();
  const [x, setX] = useState(0);

  const goRight = () => {
    x === -100 * ([1, 2, 3, 4, 5, 6].length - 5) ? setX(0) : setX(x - 100);
  };
  const goLeft = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6].length - 5) ? setX(x + 100) : setX(0);
  };

  const goRightMob = () => {
    x === -100 * ([1, 2, 3, 4, 5, 6].length - 1) ? setX(0) : setX(x - 100);
  };
  const goLeftMob = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6].length - 1) ? setX(x + 100) : setX(0);
  };

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading} style={{ color: color }}>
          Vinland <strong className={classes.highlight}>RoadMap</strong>
        </h6>
        <p className={classes.para} style={{ color: color }}>
          Fundamentally strong and visionary project with strong foundation.
        </p>
      </div>
      <Fade top>
        <div className="mt-5">
          <div className="row g-0 align-items-center ">
            <div className="col-2 col-md-1">
              {" "}
              <button
                className="c--right"
                onClick={window.innerWidth > 900 ? goLeft : goLeftMob}
              >
                <div className="icon-wrapper">
                  <ChevronLeft className={classes.icon} />
                </div>
              </button>
            </div>

            <div className="col-8 col-md-10">
              <div className="slider">
                {[
                  <div className={classes.quarterWrapper}>
                    <div>
                      <Description className={classes.icon} />
                      <h4 className={classes.quarterText}>Q4, 2021</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details} style={{ color: color }}>
                      <h6 className={classes.title}>Research</h6>

                      <ul className={classes.list} style={{ color: color }}>
                        <li>Research on Metaverse & Defi solutions</li>
                        <li>
                          Research on building platforms and team formation
                        </li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <GroupWork className={classes.icon} />
                      <h4 className={classes.quarterText}>Q1, 2022</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details} style={{ color: color }}>
                      <h6 className={classes.title}>Beta Launch</h6>

                      <ul className={classes.list} style={{ color: color }}>
                        <li>Vinland closed beta launch - tester program .</li>
                        <li>
                          Integration and partnerships with blue chip defi
                          protocols .
                        </li>
                        <li>
                          Implementation of single player shooter mechanics
                        </li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <LocalFlorist className={classes.icon} />
                      <h4 className={classes.quarterText}>Q2, 2022</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details} style={{ color: color }}>
                      <h6 className={classes.title}>IDO & Testnet</h6>

                      <ul className={classes.list} style={{ color: color }}>
                        <li>Open beta launch - access to power users</li>
                        <li>
                          Expanding protocols integration upto 15 across DeFi
                          and games
                        </li>
                        <li>
                          Onboarding users via Learn to earn model - in-game
                          quests launch
                        </li>
                        <li>
                          Laying smart contract foundations of a play to earn
                          battle royale game mode
                        </li>
                        <li>
                          Integration of video live streaming in the metaverse
                          using Livepeer.
                        </li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <Timer className={classes.icon} />
                      <h4 className={classes.quarterText}>Q3, 2022</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details} style={{ color: color }}>
                      <h6 className={classes.title}>Mainnet Launch</h6>

                      <ul className={classes.list} style={{ color: color }}>
                        <li>(Tentative) token launch</li>
                        <li>
                          DAO formation to allow users and quest developers
                          participate in quests design
                        </li>
                        <li>
                          DAO formation to allow users and quest developers
                          participate in quests design
                        </li>
                        <li>Metaverse vlogging and in-game DeFi education</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <AccountBalance className={classes.icon} />
                      <h4 className={classes.quarterText}>Q4, 2022</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details} style={{ color: color }}>
                      <h6 className={classes.title}>New Features</h6>

                      <ul className={classes.list} style={{ color: color }}>
                        <li>Ethereum mainnet expansion. </li>
                        <li>
                          In-game advertisements for partner protocols via
                          Livepeer.
                        </li>
                        <li>
                          Implementation of third person battle royale game.
                        </li>
                      </ul>
                    </div>
                  </div>,
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="slide"
                      style={{ transform: `translateX(${x}%)` }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-2 col-md-1  ">
              <button
                className="c--right"
                onClick={window.innerWidth > 900 ? goRight : goRightMob}
              >
                <div className="icon-wrapper">
                  <ChevronRight className={classes.icon} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
