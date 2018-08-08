/* @flow */

import * as React from 'react';
import Button from '@material-ui/core/Button';
import SocialLogin from 'react-social-login';

type Props = {
  triggerLogin: () => void,
  triggerLogout: () => void,
  onClick: () => void,
  children: React.Node,
};

class GitHubButton extends React.Component<Props> {
  render() {
    const {
      triggerLogin,
      triggerLogout,
      onClick,
      children,
      ...props
    } = this.props;
    return (
      <Button
        color="inherit"
        onClick={() => {
          onClick();
          triggerLogin();
        }}
        {...props}>
        {children}
      </Button>
    );
  }
}

export default SocialLogin(GitHubButton);
