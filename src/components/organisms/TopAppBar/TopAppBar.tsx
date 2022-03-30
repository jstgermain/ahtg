import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Brand } from '../../atoms';

export default () => (
  <AppBar position='relative'>
    <Toolbar>
      <Brand size={30} width={243} />
    </Toolbar>
  </AppBar>
);
