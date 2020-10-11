import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Topbar } from './components';
import Menubar from './components/Menubar';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%'
  },
  content: {
    height: '100%',
    width: '100%'
  },

  container: {
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
    ['@media (min-width:1440px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: 1440,
    },
  },

  container_body: {
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

  body: {
    minHeight: 600,
    display: 'flex',
    margin: 'auto',
  },

  line: {
    marginTop: 25,
    borderBottom: '1px solid #EBEBEB',
    height: 1,
  }
}));

const HomeLayout = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div>
      <div className="white-bg">
        <div className={clsx(classes.container, "container")}>
          <div className={classes.root}>
            <Topbar />
          </div>
        </div>
      </div>
      <Menubar />
      <div className={clsx(classes.container_body, "container")}>
        <div className={classes.root}>
          <div className={classes.body}>
            <main className={classes.content}>{children}</main>
          </div>
        </div>
      </div>

      <div className="white-bg">
        <div className={classes.line}>&nbsp;</div>
        <div className={clsx(classes.container, "container")}>
          <div className={classes.root}>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default HomeLayout;
