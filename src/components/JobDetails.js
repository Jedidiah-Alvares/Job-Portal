import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'

export const JobDetails = ({selectedJob, open, setOpen}) => {
  const navigate = useNavigate()

  const handleClose = ()=>setOpen(false)

  return (
    <>
     <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        sx={{m:4}}
      >
        <DialogTitle id="title">
          <Typography variant='h5' component={'p'}>{selectedJob.title}</Typography>
          </DialogTitle>
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <DialogContentText
            id="company_name"
            color="black"
            pb={2}
          >
            <Typography variant='caption' color='textSecondary' component={'p'}>{selectedJob.company_name}</Typography>
            <Typography variant='caption' color='textSecondary' component={'p'}>{selectedJob.location}</Typography>
          </DialogContentText>
          <DialogContentText
            id="scroll-dialog-description"
          >
            <Typography color={'black'}  component={'p'}>Job Description:</Typography>
           {selectedJob.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={()=>navigate("/apply-form/")}>Apply Now</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
