import { useEffect, useState } from 'react';
import { isEmpty } from 'ramda';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getHospitals, removeHospital } from '../../services/api/Api';
import ContentLoader from '../atoms/ContentLoader';
import { HospitalList } from '../organisms';
import Errors from '../../constants/Errors';
import ConfirmationDialog from '../organisms/ConfirmationDialog';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [selectedHospital, setSelectedHospital] = useState<string>();
  const [hospitals, setHospitals] = useState(Object);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openAlert, setOpenAlert] = useState(false);

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
  };

  const handleRemoveHospital = async () => {
    // setSelectedHospital(undefined);
    const response = await removeHospital(selectedHospital);

    if (!response.ok) setError(response.problem);

    handleClickOpenAlert();
    setOpenAlert(false);
    setLoading(true);
  };

  const handleClickOpenAlert = () => {
    handleCloseMoreMenu();
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ position: 'relative' }}>
            <Typography variant='h1'>Hospitals</Typography>

            <Fab
              color='primary'
              aria-label='add'
              sx={{ position: 'absolute', right: 0, top: 0 }}
              onClick={() => navigate('/add-hospital')}
            >
              <AddIcon />
            </Fab>
          </Box>
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
              removeHospital={handleClickOpenAlert}
            />

            <ConfirmationDialog
              cancelButtonText='Nope'
              content='Do you really want to remove this awesome hospital from the system?'
              handleCloseAlert={handleCloseAlert}
              handleRemoveHospital={handleRemoveHospital}
              okButtonText='Yeppers'
              openAlert={openAlert}
              title='Whoa there buck-a-roo!!!'
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Main;
