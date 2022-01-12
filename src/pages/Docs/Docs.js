import React, { useEffect, useState } from "react";

import { Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Leftbar from "../../components/Leftbar";
import Overview from "./Overview";
import { Link, Route, Routes } from "react-router-dom";
import Roadmap from "../Home/Roadmap";
import Defi from "./Defi";
import Motivation from "./Motivation";
import Token from "./Token";
import Team from "./Team";
import NFT from "./NFT";
import Vision from "./Vision";
import { ArrowBack, BackspaceOutlined } from "@material-ui/icons";

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
          backgroundColor: "#ffffff",
          height: "100vh",

          background: `linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0.9)
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
            backgroundColor: "#ffffff",
            borderLeft: "1px solid #bdbdbd",
          }}
        >
          <div className="mt-5">
            <Link to="/" style={{ color: "#454545" }}>
              {" "}
              <ArrowBack /> Back To Home
            </Link>
            {tab === 0 && <Overview />}
            {tab === 1 && <NFT />}
            {tab === 2 && <Motivation />}
            {tab === 3 && <Vision />}
            {tab === 4 && <Defi />}
            {tab === 5 && <Token />}
            {tab === 6 && (
              <div style={{ paddingTop: 30 }}>
                <Roadmap color="black" />
              </div>
            )}
            {tab === 7 && <Team />}
          </div>
        </div>
      </div>
    </div>
  );
}
