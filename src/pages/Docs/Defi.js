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

export default function Overview() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h4 className={classes.heading}>
          <strong className={classes.highlight}>DeFi & Metaverse</strong>
        </h4>
      </div>
      <div>
        <p className={classes.para}>
          Lot has been talked about the metaverse of late, but if you think
          about it, the metaverse has been set in existence since the genesis
          block of ethereum, since that day we are living in a shared state.
          Since that day, every transaction, every defi protocol, every NFT has
          assimilated into one shared state(metaverse), chained block by block
          everyday, every second. However, over the course of this journey, most
          of us spent time on telegram, discord, twitter, reddit, 4chan. Till
          now there has been no native way of accessing, interacting with this
          shared state.
        </p>
        <p className={classes.para}>
          Metaverses have finally begun to access this shared state on the smart
          contract level with gaming SDKs like ChainSafe, Arkane and
          Unity/Unreal engine web3 integration. We are still very early on this
          front - but as of today you can access all user data from DeFi
          protocols using these SDKs. What will truly push this frontier is “The
          Graph” like integration on the Unity side. So basically if user data
          (points, horse breed scores etc) in ZedRun is accessible by land
          builders in Decentraland - it’s possible to create exclusive and
          personalized deals for them. We hope someone is building this !!
        </p>
        <p className={classes.para}>
          But once we have a native DeFi integration and data sharing mechanism
          what this allows is for entire in-game economies to be powered by DeFi
          primitives like lending/borrowing, lotteries on Pooltogether, NFT
          marketplaces etc. Never in the history of gaming has real money
          (stablecoins) been used to power in-game economies in a completely
          non-custodial, transparent and intuitive manner.
        </p>
        <p className={classes.para}>
          With Vinland we are trying to realise and build on this shared stare
          in an immersive 3-D space .
        </p>
        <div>
          <h6 className={classes.normalHeading}>
            <strong>One true Metaverse - multiple boundless realms</strong>
          </h6>
          <p className={classes.para}>
            Vinland is set out from day one to a world full of limitless realms,
            multiplayer from day one , players will get the opportunity to
            interact in the world along with their friends . Initially the game
            will be divided into two game realms(modes).
          </p>
        </div>
        <div>
          <h6 className={classes.normalHeading}>
            <strong>Exploration realm - </strong>
          </h6>
          <p className={classes.para}>
            Players can interact with all major defi protocols deployed
            on-chain, they would be able to buy/sell/trade in-game NFTs. Market
            participants and investors can buy digital real estate in this
            realm. Creators and artists can set up their storefronts in this
            metaverse, a world that will have multiple shops for various
            artifacts, digital fashion, gun skins, and in-game vehicles. These
            store fronts will generate revenue for the creators. Also accruing
            some value to the native token ($Vin) per transaction. This is the
            normal trend followed by a lot of projects today - but they face a
            common problem. The problem of attracting new users is becoming a
            cold-start problem. All in-game assets are only valuable when you
            have a community around it that values them. Vinland will solve this
            with a learn-to-earn approach to bootstrap the community. As
            explained above, DeFi with its product market fit has organically
            reached a healthy user base of around 7-10M users. But these
            protocols have huge treasuries which they deploy for liquidity
            mining - essentially a user acquisition strategy. With RabbitHole
            and Coinbase Earn entering the learn-to-earn DeFi space - we saw new
            users being onboarded through quests and guided tutorials. We see
            this strategy as the perfect playbook to bootstrap Vinland’s users
            as in a 3D space quests can be created in a more immersive manner.
            “DeFi stewards” will guide new users across Vinland's DeFi space -
            making Aave a retail bank much more accessible, Uniswap an exchange
            with top tickers to track prices. These users as they build on-chain
            reputation can then unlock premium land, assets, and quests in
            Vinland’s battle realm.
          </p>
          <p className={classes.para}>
            Players can interact with all major defi protocols deployed
            on-chain, they would be able to buy/sell/trade in-game NFTs. Market
            participants and investors can buy digital real estate in this
            realm. Creators and artists can set up their storefronts in this
            metaverse, a world that will have multiple shops for various
            artifacts, digital fashion, gun skins, and in-game vehicles. These
            store fronts will generate revenue for the creators. Also accruing
            some value to the native token ($Vin) per transaction.
          </p>
          <p className={classes.para}>
            This is the normal trend followed by a lot of projects today - but
            they face a common problem. The problem of attracting new users is
            becoming a cold-start problem. All in-game assets are only valuable
            when you have a community around it that values them. Vinland will
            solve this with a learn-to-earn approach to bootstrap the community.
          </p>
          <p className={classes.para}>
            As explained above, DeFi with its product market fit has organically
            reached a healthy user base of around 7-10M users. But these
            protocols have huge treasuries which they deploy for liquidity
            mining - essentially a user acquisition strategy. With RabbitHole
            and Coinbase Earn entering the learn-to-earn DeFi space - we saw new
            users being onboarded through quests and guided tutorials. We see
            this strategy as the perfect playbook to bootstrap Vinland’s users
            as in a 3D space quests can be created in a more immersive manner.
            “DeFi stewards” will guide new users across Vinland's DeFi space -
            making Aave a retail bank much more accessible, Uniswap an exchange
            with top tickers to track prices. These users as they build on-chain
            reputation can then unlock premium land, assets, and quests in
            Vinland’s battle realm.
          </p>
          <p className={classes.para}>
            Various easter eggs and collectibles will be scattered in this
            world, rewarding the discoverers with either NFTs or native
            tokens($Vin). Crypto projects and businesses can also buy ad-space
            in this space with the above community.
          </p>
        </div>
        <div>
          <h6 className={classes.normalHeading}>
            <strong>Battle realm - </strong>
          </h6>
          <p className={classes.para}>
            We believe that Vinland metaverse should have a lot of entertainment
            avenues and game modes; this will encourage player retention due to
            entertainment rather than the current state of on-chain games where
            a lot of them depend on some kind of financial incentives. The first
            mode in alignment with this vision will be the “Battle realm”, with
            other modes to follow
          </p>
          <p className={classes.para}>
            The battle realm would be similar to a battle royale game, wherein
            the players will have to put in some tokens(either stablecoins or
            $Vin) as the entry fee decided by game tier. The settlement layer
            for this would be the blockchain with funds being parked in the
            battle royale smart contracts. As the player keeps on falling ,this
            information is recorded on the smart contract layer. At the final
            stage the top players get rewarded, whereas lowest players lose out
            on their tokens. We believe this bet-on-skill model is unexplored in
            the blockchain realm and we can execute this in a fine manner .
            Every match settled on the chain will accrue some fee to burn off
            the $Vin token .
          </p>
          <p className={classes.para}>
            This mode will also give users a feature to host a match, wherein
            entry fees can be set by the host , all match settlement will take
            place on a chain and some value will be transferred to the host,
            incentivising more hosts and usage.
          </p>
        </div>
        <div>
          <h6 className={classes.normalHeading}>
            <strong>Key Gameplay mechanics - </strong>
          </h6>
          <p className={classes.para}>
            <ul>
              <li>
                Players would be accompanied by a NPC companion who will guide
                the user's navigation across the defi metaverse.{" "}
              </li>
              <li>
                The metaverse will have several playable minigames which give
                users new avenues for entertainment .
              </li>
              <li>
                The metaverse would also have a functioning NFT economy where
                players would be able to buy skins,costumes, and ultra rare real
                estate .
              </li>
              <li>
                The game would be multiplayer from day one ,giving the
                opportunity to explore Vinland alongside their friends in real
                time .
              </li>
              <li>
                This economy would also be meshed with existing blue chip
                protocols with several partnerships already in the works .
              </li>
              <li>
                A battle royale game mode ,letting players bet on their skill .
              </li>
              <li>The battle royale game ,giving hosting feature as well .</li>
              <li>
                All transactions in the game would be meta-transactions to give
                a web2-like user experience .
              </li>
              <li>
                The weather of the metaverse will be dynamic ,depending on
                market conditions , bull market (sunny weather ) , high
                volatility ( stormy weather) ,sideways market( frigid ,snowy ) .
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
