import React, { useEffect, useState } from "react";
import Partnerships from "./Partnerships";
import About from "./About";
// import Team from './Team';
import Roadmap from "./Roadmap";
import SocialLinks from "./SocialLinks";
import Footer from "../../common/Footer";
import Header from "./Header";
import { readCache, addDataIntoCache } from "./../../actions/cacheActions";
import { Dialog, Slide, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DexPopupContent from "../../components/DexPopup";
import Team from "./Team";
import Collaborate from "./Collaborate";
import ForProjects from "./ForProjects";
import MainAppbar from "../../common/Appbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden" }}>
      <MainAppbar />
      <section id="header">
        <Header />
      </section>
      <hr style={{ color: "#e9e9e9" }} />
      <section id="how-it-works">
        <About />
      </section>
      <section id="for-projects">
        <ForProjects />
      </section>
      <section id="colaborare">
        <Collaborate />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      {/* <section id="team">
        <Team />
      </section> */}
      <section id="partners">
        <Partnerships />
      </section>
      <section id="social">
        <SocialLinks />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
