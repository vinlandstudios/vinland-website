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
export default function Overview() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h4 className={classes.heading}>
          <strong className={classes.highlight}>DeFi market overview</strong>
        </h4>
      </div>
      <div>
        <p className={classes.para}>
          {" "}
          Decentralized Finance has come a long way from the invention of the
          money legos like Uniswap, MakerDAO and Compound in 2019. After this we
          witnessed aggregation platforms like Yearn finance, 1inch finance and
          0x Matcha - bringing more volumes and better prices to these legos.
          Even with all these inventions and breakthroughs, the cumulative DeFi
          userbase currently is around 10M - which is less than 0.1% of fintech
          users. With DeFi reaching a product market fit across the broader
          crypto and finance vertical, onboarding the next 50M users to onchain
          products is a big problem to solve. Current defi UX experience falls
          short as new users feel intimidated and stay away from using cutting
          edge defi protocols. Clearly the next phase of products have to focus
          on solving this. 
          </p>

          <p className={classes.para}>
          {" "}
          Primarily there is an absence of a social layer where
          DeFi native users can interact with each other. In the web2 space,
          there are lots of review and community websites around financial
          review and discussion which have un-officially become the de-facto
          social layer of traditional finance. Newcomers feel accepted by this
          community and this eases the onboarding process. Another problem in
          web3 is the fact that the majority of entrees have a disconnect
          between the actual usecase of the dapp vs the price action. This stems
          from the above-mentioned fact that DeFi today is incomprehensible by
          the masses. To counter this, solutions like RabbitHole, Coinbase Earn
          and other play-to-earn apps have come up, guiding people to try out
          DeFi in sponsorship with the dapps. Over the past few months, the
          industry has also seen an cambrian explosion of blockchain games, with
          Axie infinity leading the way, now increased attention is been given
          to games and metaverses like Decentral Games, Decentraland and
          ComethGames, we feel games can be the gateway to the next wave of defi
          and crypto onboarding.
        </p>
      </div>
    </div>
  );
}
