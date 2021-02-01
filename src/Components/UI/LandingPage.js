import React, { useState } from "react";
import Logo from "../../asset/images/logo.svg";
import {
  makeStyles,
  Grid,
  Button,
  MobileStepper,
  useTheme,
  useMediaQuery,
  Card,
  IconButton,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import leftPic from "../../asset/images/bottom_pic_L.jpg";
import RightPic from "../../asset/images/bottom_pic_R.jpg";

import one from "../../asset/images/pic_one.jpg";
import two from "../../asset/images/pic_two.jpg";
import three from "../../asset/images/pic_three.jpg";

import hero1 from "../../asset/images/mobile-image-hero-1.jpg";
import hero2 from "../../asset/images/mobile-image-hero-2.jpg";
import hero3 from "../../asset/images/mobile-image-hero-3.jpg";

import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  landingpage: {},
  mainContainer: {
    height: "27em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      height: "44em",
    },
  },

  imgContainer: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPositionY: "65%",
    height: "100%",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.45em",
      height: "50em",
      width: "100%",
      backgroundSize: "100%",
      backgroundPositionY: "75%",
    },
  },
  textMainContainer: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      display: "flex",
      flexDirection: "column-reverse",

    },
  },
  textContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.45em",
      margin: 0,
      width: "100%",
    },
  },
  textTitle: {
    padding: 0,
    width: "60%",
    fontSize: "2em",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
      marginTop: "2em",
      textAlign:'center',

    },
  },
  textSubtitle: {
    width: "61%",
    fontSize: "0.75em",
    fontWeight: 600,
    opacity: "60%",
    fontFamily: "Spartan, sans-serif",
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      margin: '2em auto',
      fontSize: "1.5em",
      fontWeight: 600,
      opacity: "95%",
     textAlign:'center',
      width:'80%'
    },
  },
  navigation: {
    marginTop: "2em",
    marginLeft: "2em",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10em",
      width: "100%",
      margin: 0,
      marginTop: "2em",
    },
  },
  logoContainer: {
    marginRight: "2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "auto",
      marginLeft: "3em",
    },
  },
  linksContainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  links: {
    color: "white",
    fontWeight: 400,
    "&:hover": {
      borderBottom: "solid 2px white",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
  },
  buttonContainer: {
    width: "60%",
    marginTop: "0.55em",
    marginRight: "1.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
      marginTop: "auto",
      textAlign:'center',

    },
  },
  button: {
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  bottomButtonContainer: {
    marginTop: "7.1em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      marginLeft: "auto",
    },
  },
  mobileStepper: {
    background: "black",
    width: "20.3%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      marginLeft: "auto",
      background: "#fff",
    },
  },
  leftIcon: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      color: "black",
    },
  },
  rightIcon: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      color: "black",
    },
  },

  aboutMainContainer: {},
  leftpicContainer: {
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  leftPic: {
    width: "100%",
    height: "100%",
  },
  aboutContainer: {
    width: "39.2%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  aboutTitle: {
    fontFamily: "Spartan, sans-serif",
    textAlign: "left",
    fontWeight: 600,
    width: "80%",
    margin: "0 auto",
    fontSize: "1.2em",
    marginTop: "4em",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto",
      marginTop: "2em",
      fontSize: "1.4em",
      fontWeight: 1000,
      textDecoration: "bold",
      textAlign:'center'
    },
  },
  aboutSubtitle: {
    fontFamily: "Spartan, sans-serif",
    textAlign: "left",
    fontWeight: 600,
    width: "80%",
    margin: "0 auto",
    fontSize: "0.75em",
    opacity:'80%',
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "2em auto",
      fontSize: "0.75em",
      fontWeight: 800,
      textAlign:'center'
    },
  },
  rightPicContainer: {
    width: "30.8%",
    textAlign: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  rightPic: {
    width: "100%",
    height: "100%",
  },
  mobileNav:{
    borderRadius: 0,
    padding:'5%'
  },
  firstCOntainer:{
  },
  mobileLinkContainer:{
    width:'70%'

  },
  mobileLinks:{
    fontSize:'2em',
    fontWeight:500,
    '&:hover':{
      color: 'grey',
      
    }
  },
  mobileButtonContainer:{
    width:'20%'

  },
  mobileButton:{

  }

}));

const roomHeaderDetails = [
  {
    title: "Discover innovative ways to decorate",
    subTitle:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: one,
    alt: "table and chairs witha plant on the table",
  },
  {
    title: "We are available all across the globe",
    subTitle:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: two,
    alt: "three chair that are differwent colors",
  },
  {
    title: "Manufactured with the best materials",
    subTitle:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: three,
    alt: "black chair turned at a certain angle",
  },
];

const mobileRoomimg = [{ img: hero1 }, { img: hero2 }, { img: hero3 }];

const LandingPage = () => {
  const classes = useStyles();
  const [activeSteps, setActiveSteps] = useState(0);
  const maxSteps = roomHeaderDetails.length;
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [SwitchNav, setSwitchNav] = useState(false);

  const handleSwitch = () => {
    setSwitchNav(true);
  };

  const handleSwitchClose = () => {
    setSwitchNav(false);
  };

  const nextHeader = () => {
    setActiveSteps((prevSteps) => prevSteps + 1);
  };

  const backSteps = () => {
    setActiveSteps((preveSteps) => preveSteps - 1);
  };



  const mobileNav = (
    <React.Fragment>
      <IconButton onClick={handleSwitch}>
        <MenuIcon style={{color:'white', fontSize:'1em'}} />
      </IconButton>
    </React.Fragment>
  );

  const desktopNav = (
    <React.Fragment>
      <Grid
        item
        container
        direction="row"
        justify="space-evenly"
        className={classes.linksContainer}
      >
        <Grid item className={classes.links}>
          Home
        </Grid>

        <Grid item className={classes.links}>
          Shop
        </Grid>
        <Grid item className={classes.links}>
          About
        </Grid>
        <Grid item className={classes.links}>
          Contact
        </Grid>
      </Grid>
    </React.Fragment>
  );
  return (
    <Grid
      container
      direction={matchSM ? "row" : "column"}
      className={classes.landingpage}
    >
      <Grid
        item
        container
        direction={matchSM ? "column" : "row"}
        justify={matchSM ? "flex-start" : "center"}
        className={classes.mainContainer}
      >
        <Grid
          style={{
            backgroundImage: matchSM
              ? "url(" + mobileRoomimg[activeSteps].img + ")"
              : "url(" + roomHeaderDetails[activeSteps].img + ")",
          }}
          item
          className={classes.imgContainer}
        >
          {SwitchNav ? (
            <Card className={classes.mobileNav}>
              <Grid container direction='row-reverse' justify='space-between' alignItems='center' className={classes.firstCOntainer} >
              <Grid item container justify='space-evenly' className={classes.mobileLinkContainer}>
                <Grid item className={classes.mobileLinks}>Home</Grid>
                <Grid item className={classes.mobileLinks}>Shop</Grid>
                <Grid item className={classes.mobileLinks}>About</Grid>
                <Grid item className={classes.mobileLinks}>Contact</Grid>
              </Grid>

              <Grid item container className={classes.mobileButtonContainer}>
              <Button onClick={handleSwitchClose} item className={classes.mobileButton}> <CancelIcon  /></Button>

              </Grid>
              </Grid>
            </Card>
          ) : (
            <Grid
              container
              direction={matchSM ? "row" : "row"}
              className={classes.navigation}
              alignItems={matchSM ? "center" : null}
              justify={matchSM ? "flex-start" : null}
            >
              <Grid item className={classes.logoContainer}>
                <img src={Logo} alt="logo" />
              </Grid>

              {matchSM ? mobileNav : desktopNav}
            </Grid>
          )}
        </Grid>

        <Grid item className={classes.textMainContainer}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.textContainer}
          >
            <Grid item className={classes.textTitle}>
              {roomHeaderDetails[activeSteps].title}
            </Grid>

            <Grid item className={classes.textSubtitle}>
              {roomHeaderDetails[activeSteps].subTitle}
            </Grid>

            <Grid item className={classes.buttonContainer}>
              <Button className={classes.button}>
                Shop now <ArrowRightAltIcon style={{ marginLeft: "0.55em" }} />
              </Button>
            </Grid>
          </Grid>

          <Grid item container className={classes.bottomButtonContainer}>
            <MobileStepper
              className={classes.mobileStepper}
              steps={maxSteps}
              position="static"
              variant={matchSM ? "dots" : null}
              activeStep={activeSteps}
              nextButton={
                <Button
                  size="small"
                  onClick={nextHeader}
                  disabled={activeSteps === maxSteps - 1}
                >
                  <ArrowForwardIosIcon className={classes.rightIcon} />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={backSteps}
                  disabled={activeSteps === 0}
                >
                  <ArrowBackIosIcon className={classes.leftIcon} />
                </Button>
              }
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction={matchSM ? "column" : "row"}
        item
        className={classes.aboutMainContainer}
      >
        <Grid item className={classes.leftpicContainer}>
          <img
            className={classes.leftPic}
            src={leftPic}
            alt="chairs and coffe tables"
          />
        </Grid>

        <Grid
          item
          direction="column"
          container
          className={classes.aboutContainer}
        >
          <Grid item className={classes.aboutTitle}>
            About our furniture
          </Grid>
          <Grid item className={classes.aboutSubtitle}>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </Grid>
        </Grid>

        <Grid item className={classes.rightPicContainer}>
          <img className={classes.rightPic} src={RightPic} alt="black chair" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
