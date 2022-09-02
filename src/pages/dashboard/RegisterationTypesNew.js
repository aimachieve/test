import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { Modal, Typography, Stack, Button, Box, Divider, TextField } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
// components
import AddIcon from '@mui/icons-material/Add';
// actions
import { createType, updateType } from '../../actions/record'
// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const RegistrationTypesNew = ({ item, createType, updateType }) => {
  console.log("item=>", item)
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(item ? item.type : '');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      {
        item ?
          <>
            <Typography onClick={handleOpen} sx={{ cursor: 'pointer' }}>{item.type}</Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          </> :
          <Button variant="outlined"  sx={{}} startIcon={<AddIcon />} onClick={handleOpen}>Type</Button>
      }

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Register Type
          </Typography>
          <Stack sx={{ border: '1px solid #ddd', borderRadius: '10px', p: 1 }} spacing={2}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Types *
            </Typography>
            <TextField value={type} onChange={handleChange} fullWidth />
            <Stack direction={'row'} justifyContent="center" alignItems={'center'} spacing={2}>
              {
                item ?
                  <Button variant="contained" onClick={() => {
                    updateType({ 
                      id: item._id,
                      type: type
                     });
                    handleClose();
                  }}>
                    Save
                  </Button> :
                  <Button variant="contained" onClick={() => {
                    createType({ type });
                    handleClose();
                    setType('');
                  }}>
                    Save
                  </Button>
              }
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

RegistrationTypesNew.propTypes = {
  createType: PropTypes.func.isRequired
};

export default connect(
  null,
  { createType, updateType }
)(RegistrationTypesNew);