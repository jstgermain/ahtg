import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { WrapWithLink } from '../../hoc';
import Paper from '@mui/material/Paper';
import Blue from '../../constants/colors/Blue';
import { AddEditHospitalForm } from '../atoms/molecules';

const EditHospital = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ backgroundColor: Blue[50], p: 2 }}>
            <Breadcrumbs
              aria-label='breadcrumb'
              separator={<NavigateNextIcon fontSize='small' />}
            >
              <WrapWithLink underline='hover' color='secondary' link='/'>
                Home
              </WrapWithLink>
              <Typography color='secondary.light'>Add Hospital</Typography>
            </Breadcrumbs>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h1'>Add Hospital</Typography>
        </Grid>

        <Grid item xs={12}>
          <AddEditHospitalForm />
        </Grid>
      </Grid>
    </>
  );
};

export default EditHospital;
