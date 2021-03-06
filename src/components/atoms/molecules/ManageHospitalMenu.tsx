import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

interface Props {
  anchorEl: null | HTMLElement;
  closeMoreMenu: () => any | void;
  open: boolean | false;
  removeHospital: () => any | void;
  selectedHospital: string | undefined;
}

const ManageHospitalMenu = (props: Props) => {
  const { anchorEl, closeMoreMenu, open, removeHospital, selectedHospital } =
    props;
  const navigate = useNavigate();

  return (
    <Menu
      id='long-menu'
      MenuListProps={{
        'aria-labelledby': 'long-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={closeMoreMenu}
      PaperProps={{
        style: {
          width: '20ch',
        },
      }}
    >
      <MenuItem onClick={() => navigate(`/hospital/${selectedHospital}`)}>
        Edit
      </MenuItem>
      <MenuItem onClick={removeHospital}>Delete</MenuItem>
    </Menu>
  );
};

export default ManageHospitalMenu;
