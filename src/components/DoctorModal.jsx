import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4
};

export default function DoctorModal({ doctorDetail, handleCloseModal, open }) {
  return (
    <div>
      {doctorDetail.picture && (
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Avatar src={doctorDetail?.picture.large ? doctorDetail.picture.large : doctorDetail.avatar}  sx={{ width: 56, height: 56 }}/>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Dr. {doctorDetail.firstName} {doctorDetail.lastName}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box component="span" fontWeight='fontWeightMedium'>Specialty: </Box>{doctorDetail.speciality}
            </Typography>
            <Typography>
              <Box component="span" fontWeight='fontWeightMedium'>Years In Pratice: </Box>{doctorDetail.yearsInPractice}
            </Typography>
            <Typography>
              <Box component="span" fontWeight='fontWeightMedium'>Address: </Box>{doctorDetail.address} {doctorDetail.city}, {doctorDetail.state} {doctorDetail.postcode}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box component="span" fontWeight='fontWeightMedium'>Email: </Box>{doctorDetail.email}
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}