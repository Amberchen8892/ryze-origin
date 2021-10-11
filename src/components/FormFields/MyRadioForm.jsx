import React from 'react';
import { useField } from 'formik';
import { FormControlLabel, Radio } from '@material-ui/core';

export default function MyRadioForm({ label, ...props }) {
  const [field] = useField(props);
  console.log('check props', props.value);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
}
