import {
  Box,
  styled,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import React from 'react';
import PaginationTable from './PaginationTable';
import UserForm from './UserForm';
import UserSimpleTable from './UserSimpleTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const UserTable = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNewUser = (e) => {
    console.log('handleAddNewUser:', e);
  };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Users' }]} />
      </Box>

      <SimpleCard title="Users Data">
        <StyledButton variant="contained" color="primary" onClick={() => handleClickOpen()}>
          click
        </StyledButton>
        <UserSimpleTable />
      </SimpleCard>

      <SimpleCard title="Pagination Table">
        <PaginationTable />
      </SimpleCard>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <UserForm handleSubmitSave={handleAddNewUser}></UserForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserTable;
