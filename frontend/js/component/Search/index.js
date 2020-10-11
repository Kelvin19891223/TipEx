import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';

const useStyles = makeStyles({
  input: env => ({
    width: parseInt(env.width),
    height: parseInt(env.height),
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 4,
    border: '1px solid #d9dde7',
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Roboto',
    fontSize: 12,
    marginRight: 10,
    '&::placeholder' : {
      fontSize: 12,
      fontFamily: 'Roboto',
      color: '#949FB7'
    },

    '&:hover': {
      outline: 'None'
    }
  }),

  icon: {
    color: '#bfbcc7',
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'contents',
    marginRight: 10
  },

  flexview: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    '@media (max-width:768px)': {
      display: 'none'
    }
  }
});

const Search = ({className, onClick, width, height }) => {
  const env = {width, height};

  const classes = useStyles(env);

  // search value
  const [searchTerm, setSearchTerm] = useState("")

  const onChangeSearch = event => {
    setSearchTerm(event.target.value);
  }


  return (
    <div className={classes.flexview}>
      <input
        placeholder="Search"
        type="text"
        name="global_search"
        value={searchTerm}
        onChange={onChangeSearch}
        autoComplete="off"
        className={classes.input}
      />

      <Link to="#">
        <div className={classes.icon}>
          <Icon icon={search} size={18} />
        </div>
      </Link>
    </div>
  );
};

export { Search };
