import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';

let timerID = null;

const useStyles = makeStyles(() => ({
  NormalUnitContainer: {
    display: 'block',
    position: 'relative',
    height: 'auto',
  },

  NormalClock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  NormalupperCard: {
    justifyContent: 'center',
    display: 'flex'
  },

  digitalName: {
    fontFamily: 'Nunito-Regular',
    fontSize: 32,
    color: '#1E2022',
    letterSpacing: '1.2px'
  },

  digitLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#77838f',
    letterSpacing: '0.49px'
  }
}));

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let _days = Math.floor(t / (1000 * 60 * 60 * 24));
  let _hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let _minutes = Math.floor((t / 1000 / 60) % 60);
  let _seconds = Math.floor((t / 1000) % 60);
  return {
    time: t,
    _days,
    _hours,
    _minutes,
    _seconds,
  };
}

// function component
const StaticCard = ({ position, digit }) => {
  const classes = useStyles();
  return (
    <div className={position}>
      <span className={classes.digitalName}>{digit}</span>
    </div>
  );
};

// function component
const NormalUnitContainer = ({ digit, unit = 'time', countdown }) => {
  const classes = useStyles();

  // assign digit values
  let currentDigit = digit;
  let previousDigit;
  if (countdown) {
    previousDigit = digit + 1;

    // to prevent a negative value
    if (unit !== 'hours') {
      previousDigit = previousDigit === 60 ? 59 : previousDigit;
    } else {
      previousDigit = previousDigit === 24 ? 23 : previousDigit;
    }
  }
  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  return (
    <div className={classes.NormalUnitContainer}>
      <StaticCard position={classes.NormalupperCard} digit={currentDigit} />

      <div className={classes.digitLabel}>
        <label>
          {unit}
        </label>
      </div>
    </div>
  );
};

const NormalClock = props => {
  const { countdown, divider } = props;
  const classes = useStyles();
  const [days, SetDays] = useState(-1);
  const [hours, SetHours] = useState(-1);
  const [minutes, SetMinutes] = useState(-1);
  const [seconds, SetSeconds] = useState(-1);

  useEffect(()=> {
    const updateTime = () => {
      const { _days, _hours, _minutes, _seconds } = getTimeRemaining(countdown);
      try {
        if (_days !== days) {
          SetDays(_days);
        }

        // on hour chanage, update hours and shuffle state
        if (_hours !== hours) {
          SetHours(_hours);
        }
        // on minute chanage, update minutes and shuffle state
        if (_minutes !== minutes) {
          SetMinutes(_minutes);
        }
        // on second chanage, update seconds and shuffle state
        if (_seconds !== seconds) {
          SetSeconds(_seconds);
        }

      } catch(err) {
        console.log(err)
      }
    }

    timerID = setInterval(() => updateTime(), 1000);
    return () => {
			clearInterval(timerID);
		}
  }, [])

  return (
    <div className={classes.NormalClock}>
      <NormalUnitContainer countdown={countdown} unit={'DAYS'} digit={days} />
      {divider ? <span className="dividerColon">:</span> : ''}
      <NormalUnitContainer
        countdown={countdown}
        unit={'HOURS'}
        digit={hours}
      />
      {divider ? <span className="dividerColon">:</span> : ''}
      <NormalUnitContainer
        countdown={countdown}
        unit={'MINUTES'}
        digit={minutes}
      />
      {divider ? <span className="dividerColon">:</span> : ''}
      <NormalUnitContainer
        countdown={countdown}
        unit={'Seconds'}
        digit={seconds}
      />
    </div>
  );
}

export default NormalClock;
