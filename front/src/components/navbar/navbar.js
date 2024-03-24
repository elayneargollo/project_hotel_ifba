import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h8" className={classes.title}>
              <EmailIcon fontSize="small" /> hotelifba@gmail.com
            </Typography>
            <Typography variant="h8" className={classes.title}>
              <AddIcCallIcon fontSize="small" /> +55 (71) 3321 5688
            </Typography>
            <Typography variant="h8" className={classes.title}>
              Português
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}