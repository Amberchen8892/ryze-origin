import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import MyRadioForm from '../../FormFields/MyRadioForm';
import securityQuestions from '../../../data/securityQuestions';
export default function QuestionForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom style={{ marginBottom: '2rem' }}>
        Security Question
      </Typography>
      {securityQuestions.map((item, index) => (
        <>
          <Typography variant="h6" gutterBottom>
            {item.question}
          </Typography>
          {item.answers.map((a) => (
            <Grid item xs={12}>
              <MyRadioForm name={`question${index + 1}`} type="radio" value={a.answer} label={a.answer} />
            </Grid>
          ))}
        </>
      ))}
    </React.Fragment>
  );
}
