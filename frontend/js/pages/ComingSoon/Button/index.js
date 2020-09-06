import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ButtonStyle from './button.style';
import Loader from '../Loader';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { initial } from 'lodash';

const useStyles = makeStyles(() => ({
  button: {
    boxShadow: 'none',
    width: 98,
    height: 42,
    background: '#0E2856 0% 0% no-repeat padding-box',
    color: '#fff',
    backgroundImage: 'none!important',
    borderRadius: '4px!important',
    '&:hover': {
      background: '#fff',
      color: '#0E2856'
    },
    letterSpacing: 1,
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold'
  },

  btnText: {
    letterSpacing: 1,
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold'
  }
}));

const Button = ({
  type,
  title,
  icon,
  disabled,
  iconPosition,
  onClick,
  loader,
  loaderColor,
  isMaterial,
  isLoading,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__button'];

  const classes = useStyles();

  // isLoading prop checking
  if (isLoading) {
    addAllClasses.push('is-loading');
  }

  // isMaterial prop checking
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Checking button loading state
  const buttonIcon =
    isLoading !== false ? (

      <Fragment>
        {loader ? loader : <Loader loaderColor={loaderColor || '#30C56D'} />}
      </Fragment>
    ) : (
      icon && <span className="btn-icon">{icon}</span>
    );

  // set icon position
  const position = iconPosition || 'right';

  return (
    <ButtonStyle
      type={type}
      // className={addAllClasses.join(' ')}
      className={clsx(classes.button, addAllClasses.join(' '))}
      icon={icon}
      disabled={disabled}
      icon-position={position}
      onClick={onClick}
      {...props}
    >
      {position === 'left' && buttonIcon}
      {title && (
        <span className={classes.btnText}>
          {title}
        </span>
      )}
      {position === 'right' && buttonIcon}
    </ButtonStyle>
  );
};

Button.propTypes = {
  /** ClassName of the button */
  className: PropTypes.string,

  /** Add icon */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: PropTypes.object,

  /** Add loader */
  loader: PropTypes.object,

  /** Add Material effect */
  isMaterial: PropTypes.bool,

  /** Button Loading state */
  isLoading: PropTypes.bool,

  /** Button Loading state */
  loaderColor: PropTypes.string,

  /** If true button will be disabled */
  disabled: PropTypes.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: PropTypes.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'error',
    'primaryWithBg',
    'secondaryWithBg',
    'warningWithBg',
    'errorWithBg',
  ]),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button',
};

export default Button;
