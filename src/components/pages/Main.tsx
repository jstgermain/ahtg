import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { isEmpty } from 'ramda';
import { getHospitals } from '../../services/api/Api';
import ContentLoader from '../atoms/ContentLoader';
import { HospitalList } from '../organisms';
import Errors from '../../constants/Errors';

const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [selectedHospital, setSelectedHospital] = useState<string>();
  const [hospitals, setHospitals] = useState(Object);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    (async () => {
      if (loading) {
        const response = await getHospitals();

        if (!response.ok) setError(response.problem);

        setHospitals(response.data);
        setLoading(false);
      }
    })();
  }, [loading]);

  useEffect(() => {
    if (!isEmpty(hospitals)) console.log('***', hospitals);
  }, [hospitals]);

  const handleClickMoreMenu = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedHospital(event.currentTarget.dataset.hospitalId);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMoreMenu = () => {
    setAnchorEl(null);
    setSelectedHospital(undefined);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h1'>Hospitals</Typography>
        </Grid>

        {loading && (
          <Grid item xs={12}>
            <ContentLoader disableGutters />
          </Grid>
        )}

        {!loading && isEmpty(hospitals) && (
          <Grid item xs={12}>
            <Alert variant='outlined' severity='error'>
              <strong>Oh no!</strong> {Errors[error as keyof typeof Errors]}
            </Alert>
          </Grid>
        )}

        {!loading && !isEmpty(hospitals) && (
          <Grid item xs={12}>
            <HospitalList
              anchorEl={anchorEl}
              closeMoreMenu={handleCloseMoreMenu}
              hospitals={hospitals}
              open={open}
              openMoreMenu={handleClickMoreMenu}
              selectedHospital={selectedHospital}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Main;
