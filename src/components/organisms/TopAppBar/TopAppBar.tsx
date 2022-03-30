import { cloneElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { common } from '@mui/material/colors';
import { Brand } from '../../atoms';

export default () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <CssBaseline />
      <AppBar
        elevation={trigger ? 4 : 0}
        sx={{ paddingY: trigger ? 0 : 4.25, backgroundColor: common.white }}
      >
        <Toolbar>
          <Brand size={30} width={243} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
