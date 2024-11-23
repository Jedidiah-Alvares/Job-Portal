import {  Alert, Box, Button, FormHelperText, Icon, IconButton, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Navigate } from 'react-router-dom';

export const ApplicationForm = ({selectedJob}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState();
    const [errors, setErrors] = useState([false, false, false])
    const [openAlert, setOpenAlert] = useState(false)
    

    const handleSubmit = () =>{
        const newErrors = []

        if(name.length > 0)
            newErrors.push(false)
        else
            newErrors.push(true)

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailPattern.test(email))
            newErrors.push(false)
        else
            newErrors.push(true)
        
        const uploadLabel = document.getElementById('resume-upload-lable')
        if(resume?.type === "application/pdf"){
            newErrors.push(false)
            uploadLabel.style.color = 'grey'
            uploadLabel.style.borderColor = '#dbd3d3'
        }
        else
        {
            newErrors.push(true)
            uploadLabel.style.color = '#d32f2f'
            uploadLabel.style.borderColor = '#d32f2f'
        }

        if(!(newErrors[0] || newErrors[1] || newErrors[2])){
            setOpenAlert(true)
        }

        setErrors(newErrors)
        
    }


  return (
    <>
    {
        selectedJob?.id === undefined?
        <Navigate to={"/"} />:
    
        
    <Box sx={{display:'flex', justifyContent:"center"}} bgcolor={"#dddddd"} height={"100vh"}>
    
    <Stack spacing={2} sx={{p:5, mt:5, width: "600px", height: "380px",  border:"1px solid #dbd3d3", borderRadius:"5px"}} bgcolor={"white"} justifyContent={"space-between"}>
        <Typography variant='body1' color='textSecondary'>Application form for the role of {selectedJob.title} in {selectedJob.company_name}</Typography>
        <TextField error={errors[0]} label="Name" onChange={(e)=>setName(e.target.value)} helperText={errors[0] && "Please enter your name"} />
        <TextField error={errors[1]} label="Email" type='email' onChange={(e)=>setEmail(e.target.value)} helperText={errors[1] && "Please enter your email"} />
        <label htmlFor='resume-upload' id='resume-upload-lable' style={{display:"flex", color:"grey", justifyContent:"center", alignItems:"center", border:"1px solid #dbd3d3", borderRadius:"5px", height: "50px", textAlign:"center" }}>
            {resume?resume.name:<><FileUploadIcon color={errors[2]?'error':'action'}/>Upload Resume</>}</label>
            <FormHelperText >Only pdf format is excepted</FormHelperText>
        <TextField id={'resume-upload'} sx={{display:'none'}} type='file' defaultValue={resume} onChange={(e)=>{setResume(e.target.files[0])}} />
            
        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
    </Stack>
    <Snackbar open={openAlert} autoHideDuration={2000} onClose={()=> setOpenAlert(false)} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
        <Alert
        onClose={()=> setOpenAlert(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Form Submitted Successfully
        </Alert>
      </Snackbar>
    </Box>
    }
    </>
  )
}
