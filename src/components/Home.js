import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Box, Stack } from '@mui/material';
import { jobs } from './contants';
import { JobDetails } from './JobDetails';


export const Home = ({selectedJob, setSelectedJob}) => {
  const [open, setOpen] = useState(false);
  

  const handleViewDetails = (job) =>{
    setSelectedJob(job);
    setOpen(true)
  };
  
  return (
    <>
    <Stack spacing={1} alignItems={"center"} bgcolor={"#dddddd"} >
    {jobs.map((job)=>
        <Card key={job.id} variant="outlined" sx={{ "&:hover":{boxShadow:3}, width:"1000px"}}>
        <CardContent sx={{"&.MuiCardContent-root":{paddingBottom:0}}} >
          <Typography  variant="h4" component="div">
            {job.title}
          </Typography>
          <Stack direction={"row"} alignItems={"flex-start"}>
          <ApartmentIcon sx={{fontSize:18}} />
          <Typography  variant="subtitle2" component="div">
            {job.company_name}
          </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"flex-start"}>
            <PlaceIcon sx={{fontSize:18}} />
          <Typography gutterBottom variant="subtitle2" component="div">
            {job.location}
          </Typography>
          </Stack>
          <Box sx={{  height: "2rem"}}>
          <Typography id="desc" variant="body2" sx={{ color: 'text.secondary', display:"-webkit-box", overflow:"hidden", textOverflow:"ellipsis" }} >
          {job.description}
          </Typography>
          </Box>
        </CardContent>
      <CardActions sx={{ml:1,mt:1}}>
        <Button size="small" color="primary" sx={{textTransform:"none"}} onClick={()=>handleViewDetails(job)}>
          View Details
        </Button>
      </CardActions>
      </Card>
    )}
    </Stack>

    <JobDetails selectedJob={selectedJob} open={open} setOpen={setOpen}/>
</>    
    
  )
}
