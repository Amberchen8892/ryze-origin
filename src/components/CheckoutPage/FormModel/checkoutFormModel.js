const checkoutFormModel = {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required',
    },
    address1: {
      name: 'address1',
      label: 'Address Line 1*',
      requiredErrorMsg: 'Address Line 1 is required',
    },
    address2: {
      name: 'address2',
      label: 'Address Line 2',
    },
    city: {
      name: 'city',
      label: 'City*',
      requiredErrorMsg: 'City is required',
    },
    state: {
      name: 'state',
      label: 'State*',
      requiredErrorMsg: 'State is required',
    },
    zipcode: {
      name: 'zipcode',
      label: 'Zipcode*',
      requiredErrorMsg: 'Zipcode is required',
      invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)',
    },
    phone: {
      name: 'phone',
      label: 'Phone*',
      requiredErrorMsg: 'Country is required',
    },
    ssn: {
      name: 'ssn',
      label: 'Your SSN*',
      requiredErrorMsg: 'SSN is required',
    },
    dateOfBirth: {
      name: 'dateOfBirth',
      label: 'Date of Birth*',
      requiredErrorMsg: 'Date of Birth is required',
    },
    email: {
      name: 'email',
      label: 'Your email*',
      requiredErrorMsg: 'Email is required',
      invalidErrorMsg: 'Must be a valid email',
    },
    password: {
      name: 'password',
      label: 'Password*',
      requiredErrorMsg: 'Password is required',
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for billing',
      answer: '',
    },
    creditMonitoring: {
      name: 'creditMonitoring',
      label: 'Credit Score Monitoring starts at $24.95',
    },
    identityProtection: {
      name: 'identityProtection',
      label: 'Identity Protection starts at $9.99/month',
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required',
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)',
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid',
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)',
    },
    billingAddress1: {
      name: 'billingAddress1',
      label: 'Address Line 1*',
      requiredErrorMsg: 'Address Line 1 is required',
    },
    billingAddress2: {
      name: 'billingAddress2',
      label: 'Address Line 2',
    },
    billingCity: {
      name: 'billingCity',
      label: 'City*',
      requiredErrorMsg: 'City is required',
    },
    billingState: {
      name: 'billingState',
      label: 'State*',
      requiredErrorMsg: 'State is required',
    },
    billingZipcode: {
      name: 'billingZipcode',
      label: 'Zipcode*',
      requiredErrorMsg: 'Zipcode is required',
      invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)',
    },
    plan: {
      name: 'plan',
      label: 'Select The plan',
      requiredErrorMsg: 'Plan is required',
    },
    question1: {
      name: 'question1',
      requiredErrorMsg: 'Answer is required',
    },
    question2: {
      name: 'question2',
      requiredErrorMsg: 'Answer is required',
    },
    question3: {
      name: 'question3',
      requiredErrorMsg: 'Answer is required',
    },
    question4: {
      name: 'question4',
      requiredErrorMsg: 'Answer is required',
    },
  },
};
export default checkoutFormModel;
