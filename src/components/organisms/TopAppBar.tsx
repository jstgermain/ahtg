import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Brand from '../atoms/Brand';

const TopAppBar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <CssBaseline />
      <AppBar elevation={trigger ? 4 : 0} sx={{ paddingY: trigger ? 0 : 4.25 }}>
        <Container>
          <Toolbar disableGutters>
            <Brand size={32} width={139} />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ '@media all': { minHeight: 132 } }} />
    </>
  );
};

export default TopAppBar;
