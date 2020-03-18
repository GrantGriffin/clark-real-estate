import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

export default function Layout() {


  return (
    <div >
      <AppBar>
        <Toolbar>
          <IconButton>
          </IconButton>
          <Typography variant="h6">
            Clark Real Estate
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}