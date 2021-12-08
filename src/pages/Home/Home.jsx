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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();

  const [claimPopup, setClaimPopup] = useState(false);

  useEffect(() => {
    async function asyncFn() {
      let popupDisplayTime = await readCache();

      //Wait for Next 24 hours for popup to appear
      let nextPopupTime = popupDisplayTime + 86400000;
      let currentTime = parseInt(Date.now());

      //If next popup is less than current time means enable popup
      if (nextPopupTime <= currentTime) {
        setClaimPopup(true);
        addDataIntoCache();
      }
    }
    asyncFn();
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <section id="header">
        <Header />
      </section>
      <hr style={{ color: "#e9e9e9" }} />
      <section id="about">
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
      <section id="partnerships">
        <Partnerships />
      </section>
      <section>
        <SocialLinks />
      </section>
      <section>
        <Footer />
      </section>
      <Dialog
        className={classes.modal}
        open={claimPopup}
        TransitionComponent={Transition}
        keepMounted={false}
        onClose={() => setClaimPopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DexPopupContent closePopup={() => setClaimPopup(false)} />
      </Dialog>{" "}
    </div>
  );
}
