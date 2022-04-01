import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'ramda';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getHospital } from '../../services/api/Api';
import ContentLoader from '../atoms/ContentLoader';
import Errors from '../../constants/Errors';
import { WrapWithLink } from '../../hoc';
import { Paper } from '@mui/material';
import Blue from '../../constants/colors/Blue';
import { AddEditHospitalForm } from '../atoms/molecules';

type ParamTypes = {
  id: string;
};

const EditHospital = () => {
  const { id } = useParams<ParamTypes>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [hospital, setHospital] = useState(Object);

  useEffect(() => {
    (async () => {
      if (loading) {
        const response = await getHospital(id);

        if (!response.ok) setError(response.problem);

        setHospital(response.data);
        setLoading(false);
      }
    })();
  }, [loading, id]);

  useEffect(() => {
    if (!isEmpty(hospital)) console.log('***', hospital);
  }, [hospital]);

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
              <Typography color='secondary.light'>
                {hospital.name} - Edit
              </Typography>
            </Breadcrumbs>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h1'>{hospital.name}</Typography>
        </Grid>

        {loading && (
          <Grid item xs={12}>
            <ContentLoader disableGutters />
          </Grid>
        )}

        {!loading && isEmpty(hospital) && (
          <Grid item xs={12}>
            <Alert variant='outlined' severity='error'>
              <strong>Oh no!</strong> {Errors[error as keyof typeof Errors]}
            </Alert>
          </Grid>
        )}

        {!loading && !isEmpty(hospital) && (
          <Grid item xs={12}>
            <AddEditHospitalForm hospital={hospital} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default EditHospital;
