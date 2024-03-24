import React, { Component } from 'react';
import Rotas from '../routes/index';
import Theme from '../components/themes/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from '../contexts/auth'

export default class App extends Component {

  render() {
    return (
      <AuthProvider>
        <ThemeProvider theme={Theme}>
          <React.StrictMode>
            <CssBaseline />
            <Rotas />
          </React.StrictMode>
        </ThemeProvider>
      </AuthProvider>
    );
  }
}