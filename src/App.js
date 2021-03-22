import React, { useState, useEffect } from 'react';
import Search from './Search.js';
import Header from './Header.js';
import './App.css';

import Grid from '@material-ui/core/Grid';

const App = () => {

  return (
    <div className="rootbox">
      <h1 className="title">STAR WARS COMPARATOR</h1>
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <Grid><Header/></Grid>
        </Grid>
        <Grid item xs={3} className="mainbox">
          <Grid><Search /></Grid>
        </Grid>
        <Grid item xs={3} className="mainbox">
          <Grid><Search /></Grid>
        </Grid>
      </Grid>
    </div>
    
  )
} 

export default App;
