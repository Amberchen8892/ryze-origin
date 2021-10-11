import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField, SelectField } from '../../FormFields';
const selectPlan = [
  { value: '9.99', label: 'Identity Protection starts $9.99/month' },
  { value: '24.95', label: 'Credit Score Monitoring starts $24.95/month' },
];
export default function PaymentForm(props) {
  const {
    formField: { ssn, dateOfBirth, email, password, plan },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField name={ssn.name} label={ssn.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField name={dateOfBirth.name} label={dateOfBirth.label} format="MM/dd/yy" views={['year', 'month', 'date']} maxDate={new Date('2050/12/31')} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={password.name} label={password.label} type="password" fullWidth />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
        Select Your Plan
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField name={plan.name} label={plan.label} data={selectPlan} fullWidth />
          {/* <CheckboxField
            name={identityProtection.name}
            label={identityProtection.label}
          /> */}
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <CheckboxField
            name={creditMonitoring.name}
            label={creditMonitoring.label}
          />
        </Grid> */}
      </Grid>
      <div style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: '0.3rem' }}>*</span>You understand by clicking button below, you accept and agree to our <span style={{ color: '#00bcd4' }}>Privacy Policy</span> and <span style={{ color: '#00bcd4' }}>Term of Use.</span>
        </Typography>
      </div>
    </React.Fragment>
  );
}
