/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Grid } from '@material-ui/core';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { instagram } from 'react-icons-kit/icomoon/instagram';

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  float: right;
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
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  text-align: center;
  padding: 0 10px;
  @media (max-width: 600px) {
    // flex: 0 0 100%;
    // max-width: 100%;
    // margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoIcon = styled.div`
  color: #bfbcc7;
  margin-bottom: 25px;
`;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 30,
  },

  copyright: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    letterSpacing: 0,
    color: '#9FA4AF'
  },

  buttongroup: {
    maxWidth: 200,
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid container>
        <Grid item sm={12} md={6} lg={6} xl={6} xs={12} className={classes.copyright}>
          Copyright © 2020 TipEx All Rights Reserved.
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={6} xs={12} className={classes.buttongroup}>
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

          </Info>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
