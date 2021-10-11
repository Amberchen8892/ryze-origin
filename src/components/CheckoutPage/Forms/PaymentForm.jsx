import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { InputField, DatePickerField, SelectField } from '../../FormFields';
const states = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO ', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'DC', label: 'District of Columbia' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];
export default function PaymentForm(props) {
  const { values: formValues } = useFormikContext();
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv, billingAddress1, billingAddress2, billingCity, billingState, billingZipcode },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h7" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField name={nameOnCard.name} label={nameOnCard.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cardNumber.name} label={cardNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField name={expiryDate.name} label={expiryDate.label} format="MM/yy" views={['year', 'month']} minDate={new Date()} maxDate={new Date('2050/12/31')} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom style={{ marginTop: '50px' }}>
        Billing Address
      </Typography>
      {formValues.useAddressForPaymentDetails === 'Yes' ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputField name={billingAddress1.name} label={billingAddress1.label} value={(formValues.billingAddress1 = formValues.address1)} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField name={billingAddress2.name} label={billingAddress2.label} value={(formValues.billingAddress2 = formValues.address2)} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={billingCity.name} value={(formValues.billingCity = formValues.city)} label={billingCity.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField name={billingState.name} label={billingState.label} data={states} value={(formValues.billingState = formValues.state)} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={billingZipcode.name} label={billingZipcode.label} value={(formValues.billingZipcode = formValues.zipcode)} fullWidth />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputField name={billingAddress1.name} label={billingAddress1.label} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField name={billingAddress2.name} label={billingAddress2.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={billingCity.name} label={billingCity.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField name={billingState.name} label={billingState.label} data={states} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={billingZipcode.name} label={billingZipcode.label} fullWidth />
          </Grid>
        </Grid>
      )}
      <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
        Account Summary
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h7">Your Plan:</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {formValues.plan === '9.99' ? <Typography variant="p">Identity Protection</Typography> : <Typography variant="p">Credit Score Monitoring</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="p">Total:</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {formValues.plan === '9.99' ? <Typography variant="p">$ 9.99</Typography> : <Typography variant="h7">$ 24.95</Typography>}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" gutterBottom>
            * Membership is automatically billed to account
          </Typography>
        </Grid>
      </Grid>
      {console.log('form values from Payment', formValues)}
    </React.Fragment>
  );
}
