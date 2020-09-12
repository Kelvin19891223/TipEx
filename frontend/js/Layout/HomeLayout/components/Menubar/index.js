import React, { useState } from 'react';
import { Link as RouterLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import LogoSVG from '../../../../../images/logo.png'
import styled from 'styled-components';
import { Search } from '../../../../component/Search';
import { BlackButton } from '../../../../component/Button';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import {Container,Grid} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  loginbtn: {
    marginLeft: 10,
    marginRight: 10,
    width: 111,
    textAlign: 'center',

    '& > a': {
      color: '#0E2856',
      fontFamily: 'Roboto-Regular',
      'text-decoration': 'none'
    },

    '&: hover > a': {
      color: '#aab8d2'
    }
  },

  menubar: {
    display: 'flex',
    minHeight: 70,
    background: '#0E2856',
    color: '#EBEEF4',
    alignItems: 'center',
    marginBottom: 16,
  },

  menu : {
    marginLeft: 50,
    marginRight: 50
  },

  menuview: {
    paddingLeft: '0%',
    paddingRight: '0%',
    ['@media (min-width:320px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: 1280,
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    ['@media (min-width:1280px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: 1280,
      paddingLeft: '0%',
      paddingRight: '0%',
    },
  },

  bg: {
    background: '#0E2856'
  }

}));

const Menubar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <div className={clsx(classes.menuview, "container", "menubar-nav")}>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className={classes.menubar}>
          <NavbarBrand href="/">
            <Icon icon={home} size={25} />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink href="#discover">Discover</NavLink>
              <NavLink href="#competition">Competitions</NavLink>
              <NavLink href="#forum">Forum</NavLink>
              <NavLink href="#tipsters">Tipsters</NavLink>
              <NavLink href="#stats">Stats</NavLink>
              <NavLink href="#bet_recoder">Bet Recorder</NavLink>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    </div>
  );
};

Menubar.propTypes = {
  className: PropTypes.string
};

export default Menubar;
