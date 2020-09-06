import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';

const IndexPage = props => {

  return (
    <div className="Index">
      Temp
    </div>
  );
};

IndexPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(IndexPage)
