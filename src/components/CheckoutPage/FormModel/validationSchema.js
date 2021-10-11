import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: { firstName, lastName, address1, city, zipcode, state, phone, ssn, dateOfBirth, email, password, nameOnCard, cardNumber, expiryDate, cvv, billingAddress1, billingCity, billingZipcode, billingState, plan, question1 },
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

const validationSchema = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test('len', `${zipcode.invalidErrorMsg}`, (val) => val && val.length === 5),
    [phone.name]: Yup.string().nullable().required(`${phone.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [ssn.name]: Yup.string().required(`${ssn.requiredErrorMsg}`),
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [dateOfBirth.name]: Yup.string().required(`${dateOfBirth.requiredErrorMsg}`),
    [plan.name]: Yup.string().required(`${plan.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [question1.name]: Yup.string().required(`${question1.requiredErrorMsg}`),
  }),

  Yup.object().shape({
    [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: Yup.string().required(`${cardNumber.requiredErrorMsg}`).matches(visaRegEx, cardNumber.invalidErrorMsg),
    [billingAddress1.name]: Yup.string().nullable().required(`${address1.requiredErrorMsg}`),
    [billingCity.name]: Yup.string().nullable().required(`${billingCity.requiredErrorMsg}`),
    [billingState.name]: Yup.string().nullable().required(`${billingState.requiredErrorMsg}`),
    [billingZipcode.name]: Yup.string()
      .nullable()
      .required(`${billingZipcode.requiredErrorMsg}`)
      .test('len', `${zipcode.invalidErrorMsg}`, (val) => val && val.length === 5),
    [expiryDate.name]: Yup.string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test('expDate', expiryDate.invalidErrorMsg, (val) => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [cvv.name]: Yup.string()
      .required(`${cvv.requiredErrorMsg}`)
      .test('len', `${cvv.invalidErrorMsg}`, (val) => val && val.length === 3),
  }),
];
export default validationSchema;
