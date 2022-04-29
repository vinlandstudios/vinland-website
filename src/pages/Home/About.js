import { Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Receipt } from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 35,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
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
    letterSpacing: "-0.4px",
    margin: 0,
    paddingTop: 0,
    paddingBottom: 10,
    textAlign: "left",
    fontSize: 17,

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#1141C4, #1141C4)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "15px 30px 15px 30px",
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  title: {
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  imageContainer: {
    width: "90%",
    borderRadius: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      height: "100%",
    },
  },
  focusContainer: {
    border: "1px solid #888888",
    padding: 10,
    width: "100%",
    borderRadius: "7px",
    marginRight: 10,
    marginBottom: 10,
    height: 120,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  featureTitle: {
    fontWeight: 500,
    paddingLeft: 3,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    paddingBottom: 10,
    letterSpacing: "-0.9px",
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  featurePara: {
    paddingLeft: 8,
    fontWeight: 400,
    width: "90%",
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },

  cardTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  cardValue: {
    paddingTop: 10,
    fontWeight: 400,
    paddingLeft: "5%",
    paddingRight: "5%",
    verticalAlign: "baseline",

    margin: 0,
    fontSize: 13,
    color: "white",
    textAlign: "center",
  },
  featureCard: {
    width: "100%",
    height: "fit-content",
    marginBottom: 15,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#D1D3D7",
    border: "1px solid #bdbdbd",
    // boxShadow: "0px 50px 200px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("sm")]: {
      padding: 14,
    },
  },
  description: {
    fontWeight: 400,
    width: "100%",
    verticalAlign: "baseline",
    letterSpacing: "-0.5px",
    margin: 0,
    fontSize: 14,
    color: "#454545",
    textAlign: "left",
  },
  featureHeading: {
    fontWeight: 600,
    paddingBottom: 6,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    fontSize: 20,
    color: "#212121",
    textAlign: "left",
  },
  imageContainer: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row g-0 mt-3">
        <div className="col-md-6">
          <h6 className={classes.heading}>
            What is <strong className={classes.highlight}>VINLAND?</strong>
          </h6>
          <p className={classes.para}>
            Vinland is MultiChain Defi Metaverse where you can interact with
            many protocols in a gamified arena.
          </p>
          <p className={classes.para}>
            Gain skills for participating in the new digital economy though
            interactive gameplay.
          </p>

          <Fade>
            <div className="row mt-4">
              <div className="col-md-6">
                <div
                  className={classes.featureCard}
                  style={{ backgroundColor: "#EFE4FC" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-coins-4180930-3457456.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>
                    Multichain Universe
                  </h5>

                  <p className={classes.description}>
                    Supported Ethereum, BSC, PolkaDot, Harmony, Polygon, Solana.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={classes.featureCard}
                  style={{ backgroundColor: "#F7F0E7" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/software-4721275-3927988.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>
                    Protocol Interaction
                  </h5>

                  <p className={classes.description}>
                    Gamified way of interacting with portocols such as Uniswap,
                    Sushiswap etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <div
                  className={classes.featureCard}
                  style={{ backgroundColor: "#ffebee" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-file-4418552-3664063.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>NFTs Marketplace</h5>

                  <p className={classes.description}>
                    Authentic and premium brand NFTs marketplace
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={classes.featureCard}
                  style={{ backgroundColor: "#e0f2f1" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/home-4168210-3457141.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>
                    Decentalised Metaverse
                  </h5>

                  <p className={classes.description}>
                    Anyone can bring their NFTs and use into the metaverse
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="text-left mt-3">
              <Button
                href="https://www.youtube.com/watch?v=xYnK5nbwkkM&ab_channel=AsharShahid"
                target="_blank"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Receipt className={classes.icon} /> Learn More
              </Button>
            </div>
          </Fade>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <Fade right>
            <div className="text-center">
              <img
                src="https://miro.medium.com/max/832/0*ES_NtpZqcP7YHgOo.png"
                alt="explain"
                className={classes.imageContainer}
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
