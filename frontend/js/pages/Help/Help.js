import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BlackButton } from '../../component/Button'
import {Container,Grid, Link} from '@material-ui/core';
import IMG from '../../../images/banner.jpg'
import clsx from 'clsx';
import TippedHorseCard from './TippedHorseCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TrendingCard from './TrendingCard';
import {caretDown} from 'react-icons-kit/fa/caretDown'
import {caretUp} from 'react-icons-kit/fa/caretUp'
import Icon from 'react-icons-kit';
import FeatureNewsCard from './FeatureNewsCard';
import TodayRacing from './TodayRacing';
import styled from 'styled-components';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import {instagram} from 'react-icons-kit/fa/instagram'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

const useStyles = makeStyles(() => ({

}));


const Help = props => {
  const classes = useStyles();

  return (
    <div>
      Help
    </div>
  );
};

Help.propTypes = {
  history: PropTypes.object
};

export default withRouter(Help)
