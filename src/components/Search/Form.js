/* @flow */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { getRepositoriesIsLoading } from '../../store/repositories/selectors';
import { TextInput } from '../ReduxForm';

type Props = {
  classes: Object,
  isLoading: boolean,
};

const styles = {
  searchInput: {
    width: '100%',
  },
  inputProgress: {
    color: lightGreen[500],
    position: 'absolute',
    top: '50%',
    right: '100%',
    marginTop: -4,
    marginRight: 10,
  },
  relative: {
    position: 'relative',
  },
};

class SearchForm extends React.Component<Props> {
  render() {
    const { classes, isLoading } = this.props;
    return (
      <form className={classes.relative}>
        <Field
          label="search"
          name="search"
          component={TextInput}
          className={classes.searchInput}
        />
        {isLoading && (
          <CircularProgress size={24} className={classes.inputProgress} />
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getRepositoriesIsLoading(state),
});

export default compose(
  reduxForm({
    form: 'searchForm',
  }),
  withStyles(styles),
  connect(
    mapStateToProps,
    null
  )
)(SearchForm);
