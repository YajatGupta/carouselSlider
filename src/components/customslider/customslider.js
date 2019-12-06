import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    color:'green',
  },
  margin: {
    height: theme.spacing(3),
  },
  valueLabel:{
    backgroundColor:'white'
  },
  thumb:{
    color:'white',
    backgroundColor:'white',
  }
}));

const marks = [
  {
    value: 0,
    label: '1',
  },
  {
    value: 1,
    label: '2',
  },
  {
    value: 2,
    label: '3',
  },
  {
    value: 3,
    label: '4',
  },
  {
    value: 4,
    label: '5',
  }
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{position:"fixed", bottom:"15%",left:"40%",color:'white'}}>
      <Slider
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={4}
        onChange = {(e,v)=>props.changeslide(v)}
      />
    </div>
  );
}
