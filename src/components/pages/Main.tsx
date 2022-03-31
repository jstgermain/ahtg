import { useEffect, useState } from 'react';
import { isEmpty } from 'ramda';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getHospitals, removeHospital } from '../../services/api/Api';
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
              removeHospital={handleClickOpenAlert}
            />

            <Dialog
              open={openAlert}
              onClose={handleCloseAlert}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>
                Whoa there buck-a-roo!!!
              </DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Do you really want to remove this awesome hospital from the
                  system?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleRemoveHospital}
                  autoFocus
                  variant='contained'
                  disableElevation
                >
                  Yeppers
                </Button>
                <Button onClick={handleCloseAlert} variant='text'>
                  Nope
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Main;
