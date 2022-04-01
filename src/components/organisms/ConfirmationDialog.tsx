import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  cancelButtonText: string | undefined;
  content: string | undefined;
  handleCloseAlert: () => any | void;
  handleRemoveHospital: () => any | void;
  okButtonText: string | undefined;
  openAlert: boolean | false;
  title: string | undefined;
}

const ConfirmationDialog = (props: Props) => {
  const {
    cancelButtonText,
    content,
    handleCloseAlert,
    handleRemoveHospital,
    okButtonText,
    openAlert,
    title,
  } = props;

  return (
    <Dialog
      open={openAlert}
      onClose={handleCloseAlert}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleRemoveHospital}
          autoFocus
          variant='contained'
          disableElevation
        >
          {okButtonText}
        </Button>
        <Button onClick={handleCloseAlert} variant='text'>
          {cancelButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
