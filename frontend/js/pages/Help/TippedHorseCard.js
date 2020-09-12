import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BlackButton } from '../../component/Button'
import {Container,Grid} from '@material-ui/core';
import RUNNER_IMG from '../../../images/runner.png'
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 10,
    border: '1px solid #EBEEF4',
    height: 170,
    marginLeft: 11,
    marginRight: 11,
    marginTop: 10
  },

  line: {
    height: 1,
    borderTop: '1px solid #eef1f6'
  },

  title: {
    padding: '11px 22px',
    fontFamily: 'Roboto',
    fontSize: 17,
    color: '#2B313D'
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90
  },

  runnerImg: {
    width: '50%',
    textAlign: 'center'
  },
  runnerDetail: {
    width: '50%'
  },

  competition: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#949FB7',
    width: 100,
    'white-space': 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },

  eventNo: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#949FB7'
  },

  tips: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 500,
    color: '#949FB7'
  },

  stake: {
    background: '#EBEEF4',
    textAlign: 'center',
    color: '#0E2856',
    height: 33,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    'border-bottom-left-radius': 10,
    'border-bottom-right-radius': 10,
    display: 'flex'
  }
}));

const TippedHorseCard = props => {
  const classes = useStyles();

  const { title, eventNo, tipCount, competition, stake } = props;

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.line}>&nbsp;</div>
      <div className={classes.body}>
        <div className={classes.runnerImg}>
          <img src={RUNNER_IMG} width={42} height={54} alt="runner" />
        </div>
        <div className={classes.runnerDetail}>
          <div className={classes.competition}>{competition}</div>
          <div className={classes.eventNo}>R{eventNo}</div>
          <div className={classes.tips}>{tipCount} tips</div>
        </div>
      </div>

      <div className={classes.stake}>
        ${stake}
      </div>

    </div>
  );
};

TippedHorseCard.propTypes = {
  history: PropTypes.object
};

export default TippedHorseCard
