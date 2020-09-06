import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Topbar, Footer } from './components';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%'
  },

  container: {
    paddingLeft: '0%',
    paddingRight: '0%',
    ['@media (min-width:1280px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: 1280,
      paddingLeft: '0%',
      paddingRight: '0%',
    },
    ['@media (min-width:1440px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: 1440,
    },
  },

  body: {
    minHeight: 600,
    display: 'flex',
    margin: 'auto',
    alignItems: 'center'
  }
}));

const Minimal = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.container, "container")}>
      <div className={classes.root}>
        <Topbar />
        <div className={classes.body}>
          <main className={classes.content}>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
