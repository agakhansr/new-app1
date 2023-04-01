import React from 'react';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
},
}));
export default function App() {
  const classes = useStyles();
  return ( 
  <div className={classes.root}>
  <p>this is testing purpose</p>
  </div>
  )
}



// adding dummy console 

console.log('salam')