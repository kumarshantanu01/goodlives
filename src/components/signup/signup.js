import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
// import { TextField } from "@material-ui/core";
// import { Link } from "react-router-dom";

const useStyles = makeStyles({
  signup_button: {
    backgroundColor: "#7C8BD3",
    color: "#fff",
    fontWeight: 800,
    width: "20vw",
    padding: "0.7rem",
    marginTop: '2rem',
    "&:hover": {
      backgroundColor: "#FF91A3",
    },
  },
  link: {
    fontSize: 25,
    color: "#fff",
    textDecoration: "none",
  },
  signup_form: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    height: "40vh",
  },
  signup_right: {
    width: "50vw",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  signup_left: {
    width: "50vw",
    height: "70vh",
    backgroundColor: "#000",
  },
  container: {
    width: "90vw",
    height: "70vh",
    display: "flex",
    backgroundColor: "#B9E1EF",
    margin: "auto",
  },
  main_container: {
    height: "90vh",
    display: "flex",
    backgroundColor: "#f2f2f2",
  },
  signup_heading:{
    fontSize: '40px',
    fontWeight: 'bold',
  },
  signup_subheading:{
    fontSize: '18px',
    fontWeight: 'medium',
    padding: '2rem 4rem',
  },
  points:{
    fontSize: '18px',
    fontWeight: "bold",
    padding: "0.2rem",
  }
});

function Signup() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      <Box className={classes.container}>
        <Box className={classes.signup_left}>
          <img
            src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643302516/c6f292e171c4cbd1ccf107ab3bd770d9_ml3dmo.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box className={classes.signup_right}>
          <Box className={classes.signup_form}>
            
            <div className={classes.signup_heading}>Sign up now!</div>
            <div className={classes.signup_subheading}>GoodLives is a one-stop Mental Wellness Platform. We are making Mental Health solutions accessible & affordable. It’s easy & simple, Sign Up Today!</div>
              <div className={classes.points}>
                  <ul>
                      <li>Personalized Dashboards</li>
                      <li>Regular Recommendations from Best Experts</li>
                      <li>Mood Tracker</li>
                      <li>Self-help Tools</li>
                  </ul>
              </div>
              <Button className={classes.signup_button}>SIGN UP</Button>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
