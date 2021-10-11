import { responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#21e6c1',
    },
    secondary: {
      main: '#21e6c1',
    },
    // primary: cyan,
    // secondary: cyan,
  },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export { theme, useStyle };
