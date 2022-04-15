import { makeStyles } from "@material-ui/core";
import React from "react";
// import { Box, Button,   } from "@mui/material";
// import { Link } from "react-router-dom";

export default Home;

const useStyles = makeStyles({
  box:{
      display: 'flex',
      height: '90vh',
      "@media (max-width: 750px)": {
        display: 'flex',
      flexDirection: 'column',
      }
      
  },
  container1:{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#F0F0F0",
      alignItems: 'start',
      justifyContent: 'center',
      paddingBottom: '4rem' ,
      paddingLeft: '3rem',
      width: '50vw',
      "@media (max-width: 750px)": {
        width: "100%",
        height: "70vh",
      }
  },
  imagebox:{
    width: "50vw", height: "90vh", backgroundColor: "#212529",
    "@media (max-width: 750px)": {
      width: "100%",
      height: "30vh",
    }
  },
  homesubheading:{
    fontWeight: "lighter",
    paddingTop: "1rem",
  },
  buttonbox:{
    display: 'flex',
    flexDirection: 'row',
  },
  textcontainer:{
    width: "80%",
    fontSize: "30px",
    // fontFamily: "roboto",
    // fontStyle: "roboto"
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div >
    <div className={classes.box}>
      <div className={classes.container1}>
        <div className={classes.textcontainer}>
            <h1>How Do We Help You Lead A Good Life?</h1>
            {/* <h3 className={classes.homesubheading}>Your one stop solution for live price and latest news related to crypto.</h3> */}
        </div>
        <div className={classes.buttonbox}>
          {/* <Link to="/prices" style={{color: '#DD79AA', textDecoration: 'none'}}> */}
          <div style={{ background: "#7C8BD3", color: "#fff", width:'240px', marginTop: '2rem', marginRight: "1rem", padding: '1rem', borderRadius: '10px', fontSize: "20px", cursor: "pointer" }}>
          Create your free account
          </div>
          {/* </Link> */}
          {/* <Link to="/news" style={{color: '#DD79AA', textDecoration: 'none'}}> */}
          {/* <div  style={{ background: "#212529", color: "#DD79AA", width:'140px', marginTop: '2rem', marginRight: "1rem", padding: '1rem' }}>
          News
          </div> */}
          {/* </Link> */}
        </div>
      </div>
      <div className={classes.imagebox}>
          <img
            src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1650032048/good%20lives/GoodLives-how-it-works_fwojgs.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

    </div>
    </div>
  );
}
