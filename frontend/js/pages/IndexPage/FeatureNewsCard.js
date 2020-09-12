import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BlackButton, BlueButton } from '../../component/Button'
import {Container,Grid} from '@material-ui/core';
import PHOTO_1 from '../../../images/photo_1.png'
import clsx from 'clsx';
import { heart } from 'react-icons-kit/icomoon/heart';
import {ic_chat_bubble} from 'react-icons-kit/md/ic_chat_bubble'


const useStyles = makeStyles(() => ({
  root: {
    height: 75,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 5,
    paddingBottom: 5,
  },

  flexView: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  imgView: {
    width: 70,
    marginRight: 15,
  },

  body: {
    width: 'calc(100% - 90px)'
  },

  description: {
    fontFamily: 'Roboto',
    color: '#596172',
    marginTop: 4,
    fontSize: 16,
    lineHeight: '19px',
    display: 'block',
    display: '-webkit-box',
    maxWidth: '100%',
    height: 38,
    margin: '0 auto',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis'
  }
}));

const FeatureNewsCard = props => {
  const classes = useStyles();

  const { tag, description } = props;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.flexView}>
          <div className={classes.imgView}>
            <img src={PHOTO_1} height={70} width={70} alt={tag}/>
          </div>
          <div className={classes.body}>
            <div className={classes.tag}>
              <BlueButton
                title={tag}
                fontSize={12}
                bold
                width={14}
                height={2}
                borderRadius
              />
            </div>
            <div className={classes.description}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FeatureNewsCard.propTypes = {
  history: PropTypes.object
};

export default FeatureNewsCard
