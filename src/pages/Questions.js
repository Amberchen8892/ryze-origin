import * as React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ryzeQuestions from '../data/ryzeQuestions';
import creditScoreQuestions from '../data/creditScoreQuestions';
import { Collapse } from 'react-collapse';

const useStyles = makeStyles({
  custom: {
    color: '#1a1a2e',
    fontWeight: 'bold',
  },
  tab: {
    color: '#892cdc',
    fontWeight: 'bolder',
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const toggleClass = (index, e) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const moreLess = (index) => {
    if (activeIndex === index) {
      return <ArrowCircleUpIcon onClick={() => toggleClass(index)} style={{ fill: '#1a1a2e' }} />;
    } else {
      return <ArrowCircleDownIcon onClick={() => toggleClass(index)} style={{ fill: '#1a1a2e' }} />;
    }
  };

  return (
    <div className="questions-container">
      <div className="questions-box container">
        <Box sx={{ width: '100%', minHeight: '100vh' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor={'secondary'}>
              <Tab label={<span style={{ color: 'white', fontWeight: '500' }}>Membership FAQ</span>} {...a11yProps(0)} />
              <Tab label={<span style={{ color: 'white', fontWeight: '500' }}>Credit Score FAQ</span>} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ul className="list-group">
              {ryzeQuestions.map((item, i) => (
                <li className="list-group-item question-list">
                  <div className="question-icon-container">
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography variant="p" className={classes.custom}>
                          {item.question}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} style={{ textAlign: 'end' }}>
                        {moreLess(i)}
                      </Grid>
                    </Grid>
                  </div>
                  <Collapse isOpened={activeIndex === i}>
                    <div
                      className={{
                        show: activeIndex === i,
                        hide: activeIndex !== i,
                      }}
                    >
                      {parse(item.answer)}
                    </div>
                  </Collapse>
                </li>
              ))}
            </ul>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ul className="list-group">
              {creditScoreQuestions.map((item, i) => (
                <li className="list-group-item question-list">
                  <div className="question-icon-container">
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography variant="p" className={classes.custom}>
                          {item.question}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} style={{ textAlign: 'end' }}>
                        {moreLess(i)}
                      </Grid>
                    </Grid>
                  </div>
                  <Collapse isOpened={activeIndex === i}>
                    <div
                      className={{
                        show: activeIndex === i,
                        hide: activeIndex !== i,
                      }}
                    >
                      {parse(item.answer)}
                    </div>
                  </Collapse>
                </li>
              ))}
            </ul>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
