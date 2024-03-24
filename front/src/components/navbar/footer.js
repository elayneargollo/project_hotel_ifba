import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    root: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
    },
  }),
);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h8" className={classes.title}>
             @ Julho 2021
            </Typography>
            <Typography variant="h8" className={classes.title}>
              Trabalho de programação web - IFBA
            </Typography>
            <Typography variant="h8" className={classes.title}>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}