import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { getHospitals } from '../../../services/api/Api';
import { boolean } from 'yargs';
import { ContentLoader } from '../../atoms';

const Main = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [hospitals, setHospitals] = useState(Object);
  const [errors, setErrors] = useState<String>();

  useEffect(() => {
    (async () => {
      if (loading) {
        const response = await getHospitals();

        if (!response.ok) setErrors(response.problem);

        setHospitals(response.data);
        setLoading(false);
      }
    })();
  }, []);

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

        {!loading && (
          <Grid item xs={12}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
                </ListItemAvatar>
                <ListItemText
                  primary='Brunch this weekend?'
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    alt='Travis Howard'
                    src='/static/images/avatar/2.jpg'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Summer BBQ'
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
                </ListItemAvatar>
                <ListItemText
                  primary='Oui Oui'
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        Sandra Adams
                      </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Main;
