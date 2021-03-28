import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function ContinuousSlider({ budget, setBudget }) {
  const classes = useStyles();
    const [value, setValue] = useState(1000)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Budget = ${value}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" max={5000}/>
        </Grid>
      </Grid>
      <Button onClick={() => setBudget(value)} variant="contained" color="primary">Submit</Button>
    </div>
  );
}