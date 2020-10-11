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

const useStyles = makeStyles(() => ({
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  loginbtn: {
    margin:'auto',
    marginLeft: 10,
    marginRight: 10,
    width: 111,
    textAlign: 'center',
    color: '#0E2856',
    '& > a': {
      color: '#0E2856',
      fontFamily: 'Roboto-Regular',
      'text-decoration': 'none',
      justifyContent: 'center'
    },

    '&: hover > a': {
      color: '#aab8d2'
    }
  },

  menubar: {
    display: 'flex',
    minHeight: 70,
    background: '#FFF',
    color: '#EBEEF4',
    alignItems: 'center',
    width: '100%',
    padding: '0px!important',
    '& > a': {
      padding: 0
    }
  },

  menu : {
    marginLeft: 50,
    marginRight: 50
  },

  bg: {
    background: '#0e2856'
  },

  flexEnd: {
    justifyContent: 'flex-end',
    display: 'flex'
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <Toolbar className={clsx(classes.topbar, className)}>
        {/* <RouterLink to="/">
          <img
            alt="Logo"
            src={LogoSVG}
            height={71}
            width={194}
          />
        </RouterLink> */}

        <Navbar collapseOnSelect expand="sm" bg="white" variant="dark" className={classes.menubar}>
          <NavbarBrand href="/">
            <img
              alt="Logo"
              src={LogoSVG}
              height={71}
              width={194}
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" className={classes.bg}/>
          <NavbarCollapse id="responsive-navbar-nav" className={classes.flexEnd}>
            <Nav className="mr-auto">

              <Search
                width={203}
                height={30}
              />

              <NavLink href="#">
                <div className={classes.loginbtn}>
                  Log in
                </div>
              </NavLink>
              <NavLink href="#bet_recoder">
                <BlackButton
                  type="submit"
                  title="Sign up"
                  fontSize={14}
                  isMaterial
                  width={131}
                  height={46}
                />
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        {/* <div className={classes.topbar}>
          <Search
            width={203}
            height={30}
          />

          <div className={classes.loginbtn}>
            <RouterLink to="/">
              Log in
            </RouterLink>
          </div>

          <BlackButton
            type="submit"
            title="Sign up"
            fontSize={14}
            isMaterial
            width={111}
            height={46}
          />
        </div> */}
      </Toolbar>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
