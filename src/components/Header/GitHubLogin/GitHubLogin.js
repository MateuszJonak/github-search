/* @flow */

import * as React from 'react';
import { compose } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import lightGreen from '@material-ui/core/colors/lightGreen';
import api from '../../../api';
import GitHubButton from './GitHubButton';

const {
  REACT_APP_GITHUB_GATEKEEPER,
  REACT_APP_GITHUB_CLIENT_ID,
  REACT_APP_GITHUB_REDIRECT,
} = process.env;

type Props = {
  children: React.Node,
  isLoading: boolean,
  classes: Object,
  apiSuccess: Function,
  apiFailed: Function,
  apiCallEmpty: Function,
};

const styles = {
  butttonDisable: {
    color: 'rgba(255,255,255,0.6) !important',
  },
  buttonProgress: {
    color: lightGreen[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  relative: {
    position: 'relative',
  },
};

class GitHubLogin extends React.Component<Props> {
  handleLoginSuccess = (user: Object) => {
    this.props.apiSuccess(api.methods.GITHUB_AUTH, user);
  };

  handleLoginFailure = (err: Error) => {
    this.props.apiFailed(api.methods.GITHUB_AUTH, err.message || err);
  };

  handleOnClick = () => {
    this.props.apiCallEmpty(api.methods.GITHUB_AUTH);
  };

  render() {
    const { children, isLoading, classes } = this.props;

    return (
      <div className={classes.relative}>
        <GitHubButton
          provider="github"
          autoCleanUri
          gatekeeper={REACT_APP_GITHUB_GATEKEEPER}
          appId={REACT_APP_GITHUB_CLIENT_ID}
          redirect={REACT_APP_GITHUB_REDIRECT}
          onLoginSuccess={this.handleLoginSuccess}
          onLoginFailure={this.handleLoginFailure}
          className={classNames({ [classes.butttonDisable]: isLoading })}
          disabled={isLoading}
          onClick={this.handleOnClick}>
          {children}
        </GitHubButton>
        {isLoading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    );
  }
}

export default compose(
  api.withActions,
  withStyles(styles)
)(GitHubLogin);
