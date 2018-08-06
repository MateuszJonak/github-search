/* @flow */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

type Props = {
  classes: Object,
};

const styles = {
  flex: {
    flexGrow: 1,
  },
};

const Header = ({ classes }: Props) => (
  <AppBar position="absolute">
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex}>
        Repositories
      </Typography>
      <Button color="inherit">Github login</Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
