import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BlackButton } from '../../component/Button'
import {Container,Grid} from '@material-ui/core';
import PHOTO_1 from '../../../images/photo_1.png'
import PHOTO_2 from '../../../images/photo_2.png'
import PHOTO_3 from '../../../images/photo_3.png'
import clsx from 'clsx';
import { heart } from 'react-icons-kit/icomoon/heart';
import {ic_chat_bubble} from 'react-icons-kit/md/ic_chat_bubble'


const useStyles = makeStyles(() => ({
  root: {
    height: 60,
    paddingLeft: 28,
    paddingRight: 31,
    paddingTop: 12,
  },

  line: {
    height: 1,
    'border-bottom': '1px solid #EBEEF4',
  },

  flexView: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  imgView: {
    width: 41,
    height: 40,
    borderRadius: '50%',
    border: '3px solid #949FB7',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    fontSize: 16,
    color: '#949FB7',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },

  body: {
    width: 'calc(100% - 135px)'
  },

  time: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#949FB7',
    alignItems: 'center',
    display: 'flex'
  },

  competition: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#596172',
  },

  state: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#949FB7',
  }
}));

const TodayRacing = props => {
  const classes = useStyles();

  const { eventNo, competition, state, time } = props;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.flexView}>
          <div className={classes.imgView}>
            {eventNo}
          </div>
          <div className={classes.body}>
            <div className={classes.competition}>{competition}</div>
            <div className={classes.state}>{state}</div>
          </div>
          <div className={classes.time}>
            {time}
          </div>
        </div>
      </div>
      <div className={classes.line} />
    </>
  );
};

TodayRacing.propTypes = {
  history: PropTypes.object
};

export default TodayRacing
