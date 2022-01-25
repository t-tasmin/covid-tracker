import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';


const Cards = (props) => {

  if (Object.getOwnPropertyNames(props.data).length === 0){
    return 'Loading......';
  }

  const data =props.data.fetchedData;
 
  return (
    <div className="container">
      <Grid container spacing = {3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.confirmed.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">No of Active Cases of Covid-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.recovered.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">No of Recoveries from Covid-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.deaths.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">No of Deaths caused by Covid-19</Typography>
          </CardContent>
        </Grid>

      </Grid>
    </div>
  );

  };

export default Cards;