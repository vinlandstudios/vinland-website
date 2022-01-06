import React, { useEffect, useState } from "react";

import { Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Leftbar from "../../components/Leftbar";
import Overview from "./Overview";
import { Route, Routes } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({}));

export default function Docs() {
  const classes = useStyles();

  return (
    <div>
      <div
        className="row"
        style={{
          backgroundColor: "#212121",
          height: "100vh",
          background: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.)
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
          <Leftbar />
        </div>
        <div
          className="col-md-8"
          style={{
            height: "100vh",
          }}
        >
          <div className="mt-5">
            <Overview />
          </div>
        </div>
      </div>
    </div>
  );
}
