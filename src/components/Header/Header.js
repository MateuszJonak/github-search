/* @flow */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import GitHubLogin from './GitHubLogin';
import api from '../../api';
import { type Profile } from '../../lib/profile';
import {
  getGitHubProfile,
  getGitHubIsLogged,
  getGitHubIsLoading,
} from '../../store/auth/selectors';

type Props = {
  classes: Object,
  githubProfile: Profile,
  githubIsLogged: boolean,
  githubIsLoading: boolean,
  apiReset: string => void,
};

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Header extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Repositories
          </Typography>
          {this._renderGitHubButton()}
        </Toolbar>
      </AppBar>
    );
  }

  _renderGitHubButton() {
    const {
      githubIsLogged,
      githubIsLoading,
      classes,
      githubProfile,
    } = this.props;
    if (githubIsLogged) {
      return (
        <Button variant="text" color="inherit" onClick={this.logout}>
          <GithubCircleIcon className={classes.extendedIcon} />
          {githubProfile.id}
        </Button>
      );
    }
    return (
      <GitHubLogin isLoading={githubIsLoading}>
        <GithubCircleIcon className={classes.extendedIcon} />
        Login
      </GitHubLogin>
    );
  }

  logout = () => this.props.apiReset(api.methods.GITHUB_AUTH);
}
const mapStateToProps = state => ({
  githubIsLogged: getGitHubIsLogged(state),
  githubProfile: getGitHubProfile(state),
  githubIsLoading: getGitHubIsLoading(state),
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    null
  ),
  api.withActions
)(Header);
