import { Fragment } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ManageHospitalMenu from '../atoms/molecules/ManageHospitalMenu';

interface Props {
  anchorEl: null | HTMLElement;
  closeMoreMenu: () => any | void;
  hospitals: string[];
  open: boolean | false;
  openMoreMenu: (event: any) => any | void;
  removeHospital: () => any | void;
  selectedHospital: string | undefined;
}

const HospitalList = (props: Props) => {
  const {
    anchorEl,
    closeMoreMenu,
    hospitals,
    openMoreMenu,
    open,
    removeHospital,
    selectedHospital,
  } = props;
  const theme = useTheme();

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {hospitals.map((hospital: any) => (
        <Fragment key={hospital.id}>
          <ListItem
            alignItems='flex-start'
            secondaryAction={
              <IconButton
                edge='end'
                aria-label='more'
                id='long-button'
                data-hospital-id={hospital.id}
                onClick={openMoreMenu}
                aria-controls={open ? 'long-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                <MoreVertIcon />
              </IconButton>
            }
            sx={{
              [theme.breakpoints.down('sm')]: {
                display: 'block',
                width: '100%',
              },
            }}
          >
            <ListItemAvatar
              sx={{
                pr: 2,
                [theme.breakpoints.down('sm')]: { display: 'none' },
              }}
            >
              {/* Purposely using the name as src since the images are terrible quality, otherwise hospital.logo would be used */}
              <Avatar alt={hospital.name} src={hospital.name} />
            </ListItemAvatar>
            <ListItemText primary={<strong>{hospital.name}</strong>} />
            <ListItemText
              primary={
                <Typography color='text.primary'>hospital.address</Typography>
              }
              secondary={
                <Typography color='text.primary'>
                  {hospital.city}, {hospital.state} {hospital.zip}
                </Typography>
              }
            />
            <ListItemText primary={hospital.phone} />
          </ListItem>

          <Divider component='li' />
        </Fragment>
      ))}

      <ManageHospitalMenu
        anchorEl={anchorEl}
        open={open}
        closeMoreMenu={closeMoreMenu}
        removeHospital={removeHospital}
        selectedHospital={selectedHospital}
      />
    </List>
  );
};

export default HospitalList;
