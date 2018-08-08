/* @flow */

import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import SearchForm from '../components/Search/Form';
import Header from '../components/Header';
import RepositoriesList from '../components/Repositories/List';

type Props = {
  classes: Object,
};

const style = theme => ({
  app: {
    margin: `0px ${theme.spacing.unit * 2}px`,
  },
  pageContainer: {
    padding: '80px 0px',
  },
  searchContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class App extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.app}>
          <Header />
          <div className={classes.pageContainer}>
            <Grid
              container
              justify="center"
              className={classes.searchContainer}>
              <Grid item lg={6} md={6} sm={8} xs={10}>
                <SearchForm />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <RepositoriesList />
              </Grid>
            </Grid>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(style)(App);
