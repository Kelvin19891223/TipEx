import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BlackButton } from '../../component/Button'
import {Container,Grid, Link} from '@material-ui/core';
import IMG from '../../../images/banner.jpg'
import clsx from 'clsx';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {caretDown} from 'react-icons-kit/fa/caretDown'
import {caretUp} from 'react-icons-kit/fa/caretUp'
import Icon from 'react-icons-kit';
import styled from 'styled-components';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import {instagram} from 'react-icons-kit/fa/instagram'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import { search } from 'react-icons-kit/icomoon/search';

const useStyles = makeStyles(() => ({
  root: {
    width: 'calc(100% - 25px)',
    height: 230,
    background: '#FFF',
    boxShadow: '0px 3px 6px #0a205680', // #D9DDE780
    borderRadius: 20,
    paddingTop: 20,
    margin: 25
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#141821',
    textAlign: 'center',
    marginTop: 20,
  },

  description: {
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#141821',
    textAlign: 'center'
  }
}));


const DescriptionCard = props => {
  const { title, description } = props
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
    </div>


  );
};

export default DescriptionCard
