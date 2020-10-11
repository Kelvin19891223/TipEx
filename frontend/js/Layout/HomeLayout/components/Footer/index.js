import React, { useState } from 'react';
import { Link as RouterLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import LogoSVG from '../../../../../images/logo.png'
import styled from 'styled-components';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { youtubePlay } from 'react-icons-kit/fa/youtubePlay';
import SubscribeForm from './SubscribeForm';

const useStyles = makeStyles(() => ({

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
    background: '#FFF',
    paddingTop: 20,
    paddingBottom: 20
  },

  brand: {
    height: 71,
    marginBottom: 15,
  },

  marginAuto: {
    margin: 'auto',
    ['@media (min-width:320px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none'
    }
  },

  form_title: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: '18px'
  },

  form_description: {
    padding: '16px 0',
    color: '#7D7D7D',
    fontFamily: 'Roboto',
    fontSize: 10,
    lineHeight: '14px'
  },

  attention: {
    marginTop: 30,
    fontFamily: 'Roboto',
    fontSize: 10,
    lineHeight: '14px',
    color: '#7D7D7D',
  },

  line: {
    marginLeft: 5,
    marginRight: 10,
    borderBottom: '1px solid #d2c0c0',
    height: 1,
    marginTop: 15,
  },

  copyright: {
    fontFamily: 'Open Sans',
    fontSize: 10,
    color: '#9FA4AF',
    marginTop: 25,
    marginBottom: 25,
  }
}));

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  > div {
    > a {
      > div {
        border-radius: 19px;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background-color: #0E2856;
        color: #FFF;
      }

      &:hover > div {
        color: #0E2856;
        background-color: #FFF;
        border: 1px solid #0E2856;
      }

      > div > i {
        display: grid!important;
      }
    }
  }
`;

const InfoItem = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  text-align: center;
  @media (max-width: 600px) {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoIcon = styled.div`
  color: #bfbcc7;
  margin-bottom: 25px;
`;

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <footer className="footer">
      <div className={clsx(classes.brand, "row")}>
        <div className="col-md-6 col-sm-6 col-xl-6 col-6">
          <img
            alt="Logo"
            src={LogoSVG}
            height={71}
            width={194}
          />
        </div>
        <div className={clsx(classes.marginAuto,"col-md-6 col-sm-6  col-xl-6 col-6")}>
          <Info>
            <InfoItem>
              <Link href="https://www.instagram.com/TipExAu/" target="_blank">
                <InfoIcon>
                  <Icon icon={instagram} size={18} />
                </InfoIcon>
              </Link>
            </InfoItem>


            <InfoItem>
              <Link href="https://twitter.com/TipExAus" target="_blank">
                <InfoIcon>
                  <Icon icon={twitter} size={18} />
                </InfoIcon>
              </Link>
            </InfoItem>

            <InfoItem>
              <Link href="https://www.facebook.com/TipExAu/" target="_blank">
                <InfoIcon>
                  <Icon icon={facebook} size={20} />
                </InfoIcon>
              </Link>
            </InfoItem>

            <InfoItem>
              <Link href="https://www.facebook.com/TipExAu/" target="_blank">
                <InfoIcon>
                  <Icon icon={youtubePlay} size={20} />
                </InfoIcon>
              </Link>
            </InfoItem>

          </Info>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li><a href="">About us</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Subscription</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact us</a></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li><a href="">My Account</a></li>
                <li><a href="">Discover</a></li>
                <li><a href="">Competitions</a></li>
                <li><a href="">Notification</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 list-unstyled-1">
          <div className="list-unstyled-1">
            <div className={classes.form_title}>Email Newsletters</div>
            <div className={classes.form_description}>Keep me up to date with content, updates, and offers from Athena</div>
            <div className={classes.subscribeform}>
              <SubscribeForm />
            </div>
          </div>
        </div>

        <div className={clsx(classes.attention, "col-md-12 list-unstyled-1")}>
          <div className="list-unstyled-1">
            18+ Don't let the game play you. Stay in control. Gamble responsibly. Think! About your choices. Call Gambling Help on 1800 858 or visit www.gamblinghelp.nsw.gov.au or www.gamblinghelponline.org.au.
          </div>
        </div>

        <div className="col-9 list-unstyled-1">
          <div className="list-unstyled-1">
            <div className={classes.line}>&nbsp;</div>
          </div>
        </div>

        <div className="col-12 list-unstyled-1">
          <div className="list-unstyled-1">
            <Navbar collapseOnSelect className={clsx(classes.menubar,"responsive-navbar-footer-menu")}>

              <Nav className="mr-auto">
                <NavLink href="#discover">Privacy Policy</NavLink>
                <NavLink href="#competition">Terms and Conditions</NavLink>
                <NavLink href="#forum">Help</NavLink>
                <NavLink href="#tipsters">Responsible Gambling</NavLink>
                <NavLink href="#stats">Partners</NavLink>
              </Nav>

            </Navbar>
          </div>
        </div>

        <div className={clsx(classes.copyright,"col-12 list-unstyled-1")}>
          <div className="list-unstyled-1">
            Copyright © 2020 TipEx All Rights Reserved.
          </div>
        </div>
      </div>

    </footer>

  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
