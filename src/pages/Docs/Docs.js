import React, { useEffect, useState } from "react";

import { Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Leftbar from "../../components/Leftbar";
import Overview from "./Overview";
import { Route, Routes } from "react-router-dom";
import Roadmap from "../Home/Roadmap";
import Defi from "./Defi";
import Motivation from "./Motivation";
import Token from "./Token";
import Team from "./Team";
import NFT from "./NFT";
import Vision from "./Vision";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({}));

export default function Docs() {
  const classes = useStyles();

  const [tab, setTab] = useState(0);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        className="row"
        style={{
          backgroundColor: "#212121",
          height: "100vh",
          background: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.9)
          ),
          url("./vinland_back.jpeg") no-repeat center center fixed`,
        }}
      >
        <div
          className="col-md-2 sticky-top"
          style={{
            height: "100vh",
          }}
        >
          <Leftbar setTab={setTab} tab={tab} />
        </div>
        <div
          className="col-md-10"
          style={{
            height: "100vh",
            overflowY: "scroll",
            backgroundColor: "#191A20",
          }}
        >
          <div className="mt-5">
            {tab === 0 && <Overview />}
            {tab === 1 && <NFT />}
            {tab === 2 && <Motivation />}
            {tab === 3 && <Vision />}
            {tab === 4 && <Defi />}
            {tab === 5 && <Token />}
            {tab === 6 && (
              <div style={{ paddingTop: 30 }}>
                <Roadmap color="white" />
              </div>
            )}
            {tab === 7 && <Team />}
          </div>
        </div>
      </div>
    </div>
  );
}
