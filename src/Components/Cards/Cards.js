import React from 'react'
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 200,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Cards({data}) {
  const classes = useStyles();
  if(!data.confirmed){
    return "Loading"
  }
 
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
                <Typography  variant="subtitle1" gutterBottom>
               <CountUp 
                start = {0} end  ={data.confirmed.value} duration={2.5} separator=","/>
                </Typography>  
          </Grid>
            <Grid item xs={12} sm container>
                <Typography  variant="subtitle1" gutterBottom>
               <CountUp 
                start = {0} end  ={data.confirmed.value} duration={2.5} separator=","/>
                </Typography>  
          </Grid>
        </Grid>
        
      </Paper>
    </div>
  );
}

