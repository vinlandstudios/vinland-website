import React, { useEffect, useState } from "react";

import { Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Leftbar from "../../components/Leftbar";

const useStyles = makeStyles((theme) => ({}));

export default function Overview() {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ color: "white" }}>DeFi market overview</h1>
      <p style={{ color: "white", textAlign: "justify" }}>
        Decentralized Finance has come a long way from the invention of the
        money legos like Uniswap, MakerDAO and Compound in 2019. After this we
        witnessed aggregation platforms like Yearn finance, 1inch finance and 0x
        Matcha - bringing more volumes and better prices to these legos. Even
        with all these inventions and breakthroughs, the cumulative DeFi
        userbase currently is around 10M - which is less than 0.1% of fintech
        users. With DeFi reaching a product market fit across the broader crypto
        and finance vertical, onboarding the next 50M users to onchain products
        is a big problem to solve. Current defi UX experience falls short as new
        users feel intimidated and stay away from using cutting edge defi
        protocols. Clearly the next phase of products have to focus on solving
        this. Primarily there is an absence of a social layer where DeFi native
        users can interact with each other. In the web2 space, there are lots of
        review and community websites around financial review and discussion
        which have un-officially become the de-facto social layer of traditional
        finance. Newcomers feel accepted by this community and this eases the
        onboarding process. Another problem in web3 is the fact that the
        majority of entrees have a disconnect between the actual usecase of the
        dapp vs the price action. This stems from the above-mentioned fact that
        DeFi today is incomprehensible by the masses. To counter this, solutions
        like RabbitHole, Coinbase Earn and other play-to-earn apps have come up,
        guiding people to try out DeFi in sponsorship with the dapps. Over the
        past few months, the industry has also seen an cambrian explosion of
        blockchain games, with Axie infinity leading the way, now increased
        attention is been given to games and metaverses like Decentral Games,
        Decentraland and ComethGames, we feel games can be the gateway to the
        next wave of defi and crypto onboarding.
      </p>
    </div>
  );
}
