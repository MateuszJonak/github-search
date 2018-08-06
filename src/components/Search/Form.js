/* @flow */

import React, { Component } from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { TextInput } from '../ReduxForm';

type Props = {
  classes: Object,
};

const styles = {
  searchInput: {
    width: '100%',
  },
};

class SearchForm extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <form>
        <Field
          label="search"
          name="search"
          component={TextInput}
          className={classes.searchInput}
        />
      </form>
    );
  }
}

export default compose(
  reduxForm({
    form: 'searchForm',
  }),
  withStyles(styles)
)(SearchForm);
