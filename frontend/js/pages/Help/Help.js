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
import DescriptionCard from './DescriptionCard';

const useStyles = makeStyles(() => ({
  topbar: {
    height: 319,
    width: '100%',
    boxShadow: '0px 1px 5px #D9DDE780',
    borderRadius: 20,
    background: '#3E54D3'
  },

  title: {
    textAlign: 'center',
    paddingTop: 60,
    fontFamily: 'Roboto',
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold'
  },

  searchbar: {
    width: '60%',
    display: 'flex',
    border: '1px solid #fff',
    marginLeft: '20%',
    marginTop: 20,
    background: '#fff',
    borderRadius: 5,
    boxShadow: '0px 3px 6px #00000029',
    height: 40,
  },

  description: {
    color: '#F6F6F7',
    fontFamily: 'Roboto',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 22,
  },

  icon: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
  },

  input: {
    border: 'none',
    width: 'calc(100% - 30px)',
    '&:focus': {
      outline: 'none'
    },
    color: '#949FB7',
    fontFamily:'Roboto',
    fontSize: 12,
    '&::placeholder': {
      color: '#949FB7',
      fontFamily:'Roboto',
      fontSize: 12,
    }
  },

  submenu: {
    marginTop: 20,
    height: 40,
    display: 'inline-flex',
    width: '100%'
  },

  submenuView: {
    overflowX: 'scroll',
    overflowY: 'hidden',
    width: '100%',
    display: '-webkit-inline-box',
    '&::-webkit-scrollbar': {
      background: 'none',
      height: 5,
      bottom: '-10px',
      position: 'absolute'
    }
  },

  item: {
    width: 100,
    height: 40,
    background: '#D9DDE7',
    marginRight: 20,
  },

  typeView: {
    marginTop: 20
  }
}));


const Help = props => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("")

  const onChangeSearch = event => {
    setSearchTerm(event.target.value);
  }

  return (

    <div className={classes.helpbar}>
      <div className={classes.topbar}>
        <div className={classes.title}>
          How can we Help?
        </div>

        <div className={classes.searchbar}>
          <div className={classes.icon}>
            <Icon icon={search} size={18} />
          </div>

          <input
            placeholder="Describe your issues"
            type="text"
            name="help_term"
            value={searchTerm}
            onChange={onChangeSearch}
            autoComplete="off"
            className={classes.input}
          />
        </div>

        <div className={classes.description}>
          TipEx's Help Center is here to provide support, tips and troubleshooting
        </div>
      </div>

      <div className={classes.submenu}>
        <div className={classes.submenuView}>
        {
          [1,2,3,4,5,6,7,8,9,11].map((item,index) => {
            return <div className={classes.item} key={index}>
              &nbsp;
            </div>
          })
        }
        </div>
      </div>

      <div className={classes.typeView}>
        <Grid container spacing={0}>
          <Grid item xl={4} lg={4} md={6} sm={12}>
            <DescriptionCard title="Betting" description="Description" />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12}>
            <DescriptionCard title="Betting" description="Description" />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12}>
            <DescriptionCard title="Betting" description="Description" />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12}>
            <DescriptionCard title="Betting" description="Description" />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12}>
            <DescriptionCard title="Betting" description="Description" />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12}>
            <DescriptionCard title="Betting" description="Description" />
          </Grid>
        </Grid>
      </div>
    </div>


  );
};

Help.propTypes = {
  history: PropTypes.object
};

export default withRouter(Help)
