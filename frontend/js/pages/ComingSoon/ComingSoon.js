/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';

import ComingSVG from '../../../images/coming_soon.svg'
import { Grid } from '@material-ui/core';
import NormalClock from './NormalClock';
import ContactForm from './ContactForm';

const useStyles = makeStyles(() => ({
  button: {
    boxShadow: 'none',
    width: 98,
    height: 42,
    background: '#19E07D 0% 0% no-repeat padding-box',
    color: '#fff',
    borderRadius: 4,
    '&:hover': {
      background: '#fff',
      color: '#19E07D'
    }
  },

  panel: {
    display: 'flex',
    justifyContent: 'space-between',
    // marginTop: '10%',
  },

  descriptionPanel: {
    marginLeft: '10%',
  },

  title: {
    textAlign: 'left',
    letterSpacing: '1.43px',
    color: '#0E2856',
    opacity: 1,
    fontSize: 38,
    fontFamily: 'Nunito-Regular'
  },

  description: {
    letterSpacing: '0.6px',
    color: '#77838F',
    opacity: 1,
    fontSize: 17,
    fontFamily: 'Nunito-Regular'
  },

  numberGroup: {
    marginTop: 50,
  },

  buttonGroup: {
    boxShadow: '0px 2px 48px #0000000F',
    background: '#FFF',
    height: 55,
  },

  img: {
    width: '100%',
    height: 'auto',
  }
}));

const ComingSoon = props => {
  const deadline = new Date(Date.parse(new Date(2020,8,28,0,0,0)));
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Grid container spacing={5}>
        <Grid item sm={12} md={6} lg={6} xl={6} xs={6}>
          <img className={classes.img} alt="Coming Soon" src={ComingSVG}/>
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={6} xs={6}>
          <div className={classes.title}>
            We're coming soon.
          </div>
          <div className={classes.description}>
            Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.
          </div>

          <div className={classes.numberGroup}>
            <NormalClock countdown={deadline} />
          </div>
          <div className={classes.buttonGroup}>
            <ContactForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

ComingSoon.propTypes = {
  history: PropTypes.object
};

export default withRouter(ComingSoon)
