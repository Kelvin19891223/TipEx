import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BlackButton } from '../../component/Button'
import PHOTO_1 from '../../../images/photo_1.png'
import PHOTO_2 from '../../../images/photo_2.png'
import { heart } from 'react-icons-kit/icomoon/heart';
import {ic_chat_bubble} from 'react-icons-kit/md/ic_chat_bubble'


const useStyles = makeStyles(() => ({
  root: {
    height: 100,
    paddingLeft: 28,
    paddingRight: 31,
    paddingTop: 22,
  },

  line: {
    height: 1,
    'border-bottom': '1px solid #EBEEF4',
    paddingBottom: 11
  },

  flexView: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  imgView: {
    width: 45,
    marginRight: 15,
    '& img': {
      borderRadius: '50%'
    }
  },

  iconview: {
    width: 95,
    display: 'flex',
    justifyContent: 'space-between'
  },

  body: {
    width: 'calc(100% - 200px)'
  },

  firstLine: {
    display: 'flex'
  },

  nickName: {
    color: '#596172',
    fontFamily: 'Roboto',
    fontSize: 15
  },

  time: {
    marginLeft: 11,
    color: '#858997',
    fontFamily: 'Roboto',
    fontSize: 14,
    'white-space': 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },

  secondLine: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2B313D',
    width: '100%',
    'white-space': 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },

  thirdLine: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#141821',
    width: '100%',
    'white-space': 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
}));

const TrendingCard = props => {
  const classes = useStyles();

  const { nickName, time, title, aNickname, aAnswer, heartCount, messageCount, type } = props;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.flexView}>
          <div className={classes.imgView}>
            <img src={type%2==0?PHOTO_1:PHOTO_2} height={45} width={45} alt={nickName}/>
          </div>
          <div className={classes.body}>
            <div className={classes.firstLine}>
              <div className={classes.nickName}>{nickName}</div>
              <div className={classes.time}>{time}</div>
            </div>
            <div className={classes.secondLine}>
              {title}
            </div>
            <div className={classes.thirdLine}>
              {aNickname} - {aAnswer}
            </div>
          </div>
          <div className={classes.iconview}>
            <BlackButton
              title={heartCount}
              fontSize={12}
              width={46}
              height={24}
              icon={heart}
              borderRadius
            />
            <BlackButton
              title={messageCount}
              fontSize={12}
              width={40}
              height={24}
              icon={ic_chat_bubble}
              borderRadius
            />
          </div>
        </div>
      </div>
      <div className={classes.line} />
    </>
  );
};

TrendingCard.propTypes = {
  history: PropTypes.object
};

export default TrendingCard
