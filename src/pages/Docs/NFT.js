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
export default function NFT() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h4 className={classes.heading}>
          <strong className={classes.highlight}>NFTs and game ownership</strong>
        </h4>
      </div>
      <div>
        <p className={classes.para}>
          NFT has become the gateway drug for onboarding the masses to web3 and
          blockchain. To quote Jack Harlow ,a mainstream rap artist -
          <strong>
            “Hey, here’s the thing about NFTs / non-fungible token, you see,”
          </strong>
          <br />
          <br />
          <strong>
            “Non-fungible means that it’s unique / There can only be one, like
            you and me / NFTs are insane / Built on a blockchain / A digital
            ledger of transactions / It records information on what’s happening
            / When it’s minted, you can sell it as art."
          </strong>
          <br />
        </p>
        <p className={classes.para}>
          NFTs in the current market landscape have become synonymous with web3
          culture - art, music, memorabilia. With the onset of web3 games, we
          now see true user ownership of in-game assets previously held at the
          whims of studios. But NFTs currently hold a very static position in
          the user journey of games. With DeFi we have seen certain early
          experiments around on-chain credit history - introducing a similar
          aspect in games will be an essential UX component of Vinland. All NFTs
          (user journey) will be created as dynamic NFTs - 1 NFT to encompass
          the user’s journey. Today marketplaces like OpenSea. Zora, although
          efficient, is not true web3 and metaverse first. If we are seeing
          companies like FB and Microsoft bet so heavily on metaverse and VR, we
          as an industry championing open metaverse can definitely do better.
          Plus NFTs being analogous to a piece of art will become more intuitive
          for normies when showcased in a metaverse like Vinland.
        </p>
      </div>
    </div>
  );
}
