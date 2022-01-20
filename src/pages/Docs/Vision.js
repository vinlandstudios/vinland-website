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

export default function Vision() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h4 className={classes.heading}>
          <strong className={classes.highlight}>Our Vision</strong>
        </h4>
      </div>
      <div>
        <p className={classes.para}>
          We aim to create an onchain multichain metaverse game bridging the gap
          between current metaverse games and DeFi. Building on our experiences
          at previous jobs and vision of how the metaverse will evolve - we see
          Vinland become the social layer to bridge DeFi and Metaverse/Games. A
          3D space allows for a more immersive experience as we witnessed the
          shift of content consumption from images -> videos -> VR. Similarly
          for DeFi to reach global penetration as content delivery networks did
          last decade, it has to be the silent engine that powers these in-game
          economies. With current metaverse projects, there is this stark
          disconnect between the actual financial economics that run in the real
          world. If players had to finance their buildings and real estate in
          these metaverses - there is no underlying mechanics to fund it. In the
          real world, banks service this exact need and in the metaverse - AAVE
          and Compound will.
        </p>
        <p className={classes.para}>
          In Vinland, users can tour the DeFi metaverse which has multiple
          storefronts for protocols like AAVE and PoolTogether. This gamified
          visual experience allows users to better comprehend the importance of
          DeFi dapps versus their IRL counterparts. We envision a very important
          role of “quest developers” who design in-game quests in collaboration
          with the community and partner protocols/DAOs. Once these first few
          cohorts of users become “DeFi savvy” after quests and a good XP-score,
          they will be able to unlock premium real estate and assets. This
          on-chain data unravels a lot of insights that can be used by Vinland
          DAO.
        </p>
      </div>
    </div>
  );
}
