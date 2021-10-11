import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, CircularProgress } from '@material-ui/core';
import { Formik, Form } from 'formik';

import AddressForm from './Forms/AddressForm';
import CreateAccountForm from './Forms/CreateAccountForm';
import PaymentForm from './Forms/PaymentForm';
import QuestionForm from './Forms/QuestionForm';
//import ReviewOrder from './ReviewOrder/ReviewOrder'
import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Your Info', 'Create Account', 'Security Questions', 'Payment details'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <CreateAccountForm formField={formField} />;
    case 2:
      return <QuestionForm formField={formField} />;
    case 3:
      return <PaymentForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center" style={{ fontFamily: 'Lato, san-serif', fontWeight: 'bolder', fontSize: '2.5rem', color: '#21e6c1' }}>
        Sign Up
      </Typography>

      <Stepper activeStep={activeStep} StepIconProps={{ classes: { root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik initialValues={formInitialValues} validationSchema={currentValidationSchema} onSubmit={_handleSubmit}>
            {({ isSubmitting, values }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button onClick={() => console.log('click')} disabled={isSubmitting} type="submit" variant="contained" color="primary" className={classes.button}>
                      {isLastStep ? 'Submit' : 'Next'}
                    </Button>
                    {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </div>
                </div>
                {/* {console.log('check values',JSON.stringify(values, null, 2))} */}
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
