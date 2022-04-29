import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 120,
    paddingBottom: 120,
    paddingLeft: "12%",
    paddingRight: "12%",
    height: "100%",
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
      paddingBottom: 40,
      textAlign: "center",
      paddingLeft: "2%",
      paddingRight: "2%",
    },
  },
  para: {
    paddingTop: 20,
    color: "black",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 400,
    verticalAlign: "middle",
    wordSpacing: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },

  usecaseWrapper: {
    borderRadius: 1,

    backgroundImage: 'url("images/pbr_fire.png")',
    backgroundPosition: "center center",
    backgroundSize: "550px",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "90%",
      padding: 20,
    },
  },
  usecaseCard: {
    borderRadius: 1,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  usecaseTitle: {
    fontWeight: 700,
    verticalAlign: "baseline",
    letterSpacing: "-0.2px",
    lineHeight: "32px",
    margin: 0,
    fontSize: 20,
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "22px",
      fontWeight: 600,
    },
  },
  usecasePara: {
    paddingTop: 10,
    fontWeight: 400,
    width: "85%",
    verticalAlign: "baseline",
    letterSpacing: "-0.2px",
    margin: 0,
    fontSize: 14,
    lineHeight: "24px",
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      lineHeight: "18px",
      fontWeight: 400,
      letterSpacing: "-0.5px",
    },
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    height: 80,

    [theme.breakpoints.down("sm")]: {
      height: 50,
    },
  },

  valueText: {
    verticalAlign: "baseline",
    letterSpacing: "-0.2px",
    fontWeight: 600,
    fontSize: 20,
    color: "black",
    textAlign: "left",
    marginRight: 5,
  },
  categoryText: {
    verticalAlign: "baseline",
    letterSpacing: "-0.2px",
    fontWeight: 500,
    fontSize: 20,
    color: "#454545",
    textAlign: "left",
    marginRight: 5,
  },
}));
export default function Tokenomics() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <Fade right>
          <div className="mb-5"></div>
          <div className="row">
            <div className="col-md-8">
              <h4 className="heading-gradient">$VIN TOKEN</h4>
              <p className={classes.para}>
                VIN token powers the Vinland platform economy. Users can use VIN
                for governance, payments, mining, and farming.
              </p>
              <div className="mt-5 row d-flex justify-content-between">
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                  <div
                    style={{
                      height: 10,
                      width: 40,
                      borderRadius: 10,
                      background: "linear-gradient(to right,#4986C1,#2CF598)",
                      marginRight: 10,
                    }}
                  ></div>
                  <div className={classes.valueText}>5%</div>
                  <div className={classes.categoryText}>Public Sale</div>
                </div>
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                  <div
                    style={{
                      height: 10,
                      width: 40,
                      borderRadius: 10,
                      background:
                        "linear-gradient(98.18deg, #ff6f3f 20.43%, #ffc546 74.85%)",
                      marginRight: 10,
                    }}
                  ></div>
                  <div className={classes.valueText}>10%</div>
                  <div className={classes.categoryText}>Seed Round</div>
                </div>
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                  <div
                    style={{
                      height: 10,
                      width: 40,
                      borderRadius: 10,
                      background:
                        "linear-gradient(319.37deg, #6aa3d8 0%, #2f72af 127.88%)",
                      marginRight: 10,
                    }}
                  ></div>
                  <div className={classes.valueText}>15%</div>
                  <div className={classes.categoryText}>Team</div>
                </div>
              </div>
              <div className="mt-3 row d-flex justify-content-between">
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                  <div
                    style={{
                      height: 10,
                      width: 40,
                      borderRadius: 10,
                      background:
                        "linear-gradient(69.92deg, #f9447b 0.64%, #d998f4 138.38%)",
                      marginRight: 10,
                    }}
                  ></div>
                  <div className={classes.valueText}>10%</div>
                  <div className={classes.categoryText}>Private Sale</div>
                </div>
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                  <div
                    style={{
                      height: 10,
                      width: 40,
                      borderRadius: 10,
                      background:
                        "linear-gradient(112.87deg, #4b7daf 8.89%, #97c9ff 91.73%)",
                      marginRight: 10,
                    }}
                  ></div>
                  <div className={classes.valueText}>25%</div>
                  <div className={classes.categoryText}>Marketing</div>
                </div>
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                  <div
                    style={{
                      height: 10,
                      width: 40,
                      borderRadius: 10,
                      background:
                        "linear-gradient(98.18deg, #de735c 20.43%, #d75e43 74.85%)",
                      marginRight: 10,
                    }}
                  ></div>
                  <div className={classes.valueText}>30%</div>
                  <div className={classes.categoryText}>Ecosystem</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src="images/vin.png" alt="chart" height="200px" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
