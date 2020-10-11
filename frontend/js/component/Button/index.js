import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonStyle, {BlueButtonStyle, GreenButtonStyle} from './button.style';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Icon from 'react-icons-kit';

const useStyles = makeStyles({
  root: env => ({
    width: parseInt(env.width),
    height: parseInt(env.height),
  }),

  paddingView: env => ({
    paddingLeft: parseInt(env.width),
    paddingRight: parseInt(env.width),
    paddingTop: parseInt(env.height),
    paddingBottom: parseInt(env.height),
  })
});

const BlackButton = ({title,onClick, fontSize, bold, width, height, icon, borderRadius }) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__button', 'is-material'];

  if (fontSize === 18) addAllClasses.push('font-18')
  if (fontSize === 14) addAllClasses.push('font-14')
  if (fontSize === 12) addAllClasses.push('font-12')
  if (borderRadius) addAllClasses.push('border-radius-5')

  const env = {width, height};
  if (bold) addAllClasses.push('bold')

  const classes = useStyles(env);
  return (
    <ButtonStyle
      className={clsx(classes.root, addAllClasses.join(' '))}
      onClick={onClick}
    >
      {
        icon ? <Icon icon={icon} size={fontSize} /> : null
      }&nbsp;
      {title}
    </ButtonStyle>
  );
};

export { BlackButton };

const BlueButton = ({title,onClick, fontSize, bold, width, height, icon, borderRadius }) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__button', 'is-material'];

  if (fontSize === 18) addAllClasses.push('font-18')
  if (fontSize === 14) addAllClasses.push('font-14')
  if (fontSize === 12) addAllClasses.push('font-12')
  if (borderRadius) addAllClasses.push('border-radius-5')

  const env = {width, height};
  if (bold) addAllClasses.push('bold')

  const classes = useStyles(env);
  return (
    <BlueButtonStyle
      className={clsx(classes.paddingView, addAllClasses.join(' '))}
      onClick={onClick}
    >
      {
        icon ? <Icon icon={icon} size={fontSize} /> : null
      }
      {
        icon ? "&nbsp;" : null
      }
      {title}
    </BlueButtonStyle>
  );
};

export { BlueButton };

const GreenButton = ({title,onClick, fontSize, bold, width, height, icon, borderRadius }) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__button', 'is-material'];

  if (fontSize === 18) addAllClasses.push('font-18')
  if (fontSize === 14) addAllClasses.push('font-14')
  if (fontSize === 12) addAllClasses.push('font-12')
  if (borderRadius) addAllClasses.push('border-radius-5')

  const env = {width, height};
  if (bold) addAllClasses.push('bold')

  const classes = useStyles(env);
  return (
    <GreenButtonStyle
      className={clsx(classes.root, addAllClasses.join(' '))}
      onClick={onClick}
    >
      {
        icon ? <Icon icon={icon} size={fontSize} /> : null
      }
      {
        icon ? "&nbsp;" : null
      }
      {title}
    </GreenButtonStyle>
  );
};

export { GreenButton };
