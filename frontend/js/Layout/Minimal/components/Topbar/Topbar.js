import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import LogoSVG from '../../../../../images/logo.png'

const useStyles = makeStyles(() => ({
  button: {
    boxShadow: 'none',
    width: 98,
    height: 42,
    background: '#19E07D 0% 0% no-repeat padding-box!important',
    color: '#fff!important',
    borderRadius: 4,
    '&:hover': {
      background: '#fff!important',
      color: '#19E07D!important'
    }
  },

  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const ClickContactForm = () => {
    try {
      window.contactbutton.onClick()
    } catch(err) {}
  }

  return (

    <Toolbar className={clsx(classes.topbar, className)}>
      <RouterLink to="/">
        <img
          alt="Logo"
          src={LogoSVG}
          height={71}
          width={194}
        />
      </RouterLink>


      <Button
        onClick={ClickContactForm}
        className={clsx(classes.button)}
      >
        Contact
      </Button>

    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
