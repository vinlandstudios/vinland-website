import React, { useEffect, useState } from "react";

import { Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Leftbar from "../../components/Leftbar";

const useStyles = makeStyles((theme) => ({}));

export default function Roadmap() {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ color: "white" }}>Roadmap:</h1>
      <p style={{ color: "white", textAlign: "justify" }}>
        Q1 , 2022 - Vinland closed beta launch - tester program . Integration
        and partnerships with blue chip defi protocols . Implementation of
        single player shooter mechanics Q2 , 2022 - Open beta launch - access to
        power users Expanding protocols integration upto 15 across DeFi and
        games Onboarding users via Learn to earn model - in-game quests launch
        Laying smart contract foundations of a play to earn battle royale game
        mode Integration of video live streaming in the metaverse using Livepeer
        . Q3 , 2022 - (Tentative) token launch DAO formation to allow users and
        quest developers participate in quests design Metaverse vlogging and
        in-game DeFi education Q4 , 2022 Ethereum mainnet expansion In-game
        advertisements for partner protocols via Livepeer Implementation of
        third person battle royale game
      </p>
    </div>
  );
}
