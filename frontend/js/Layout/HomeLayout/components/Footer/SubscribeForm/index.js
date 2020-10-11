import React, { useState } from 'react';
import useTimeout from '../useTimeout';
import TextField from '../TextField';
import Button from '../Button';
import Loader from '../Loader';
import { Form } from './SubscribeForm.style';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  body: {
    paddingTop: 3,
    display: 'flex',
    maxWidth: '100%',
    width: '100%'
  }
}));

function formatDate(date) {
  let d = new Date(date);
  let month = `${  d.getMonth() + 1}`;
  let day = `${  d.getDate()}`;
  let year = d.getFullYear();

  if (month.length < 2)
      month = `0${  month}`;
  if (day.length < 2)
      day = `0${  day}`;

  return [year, month, day].join('-');
}

export default function SubscribeForm() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  const { start } = useTimeout(() => {
    if (error) setError(false);
    if (success) setSuccess(false);
  }, 3500);

  const handleSubmit = async e => {
    e.preventDefault();
    setPending(true);
    const response = await fetch(
      '/api/subscribe/',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          email_id: value,
          regist_date: formatDate(new Date()),
        }),
      }
    );
    const data = await response.json();
    console.log(data, 'data');
    if (data.Status) {
      setPending(false);
      setSuccess(true);
      start();
      setValue('');
    } else {
      setPending(false);
      setError(true);
      start();
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <Form onSubmit={handleSubmit}>
      <div className={classes.body}>
        <TextField
          id="user_email"
          placeholder="Email address"
          type="email"
          required="required"
          value={value}
          error={error}
          errorMessage="Error for the submission"
          successMessage="Thank you for the submission"
          success={success}
          onChange={handleChange}
        />
        <Button
          type="submit"
          title="Subscribe"
          isLoading={pending}
          loader={<Loader loaderColor="white" />}
        />
      </div>
    </Form>
  );
}
