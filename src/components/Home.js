import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Box, Divider, Grid2, Stack } from '@mui/material';
import { jobs } from './contants';
import { JobDetails } from './JobDetails';
import { DisplayToggle } from './DisplayToggle';


export const Home = ({selectedJob, setSelectedJob}) => {
  const [open, setOpen] = useState(false);
  const [alignment, setAlignment] = React.useState('column');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  

  const handleViewDetails = (job) =>{
    setSelectedJob(job);
    setOpen(true)
  };

  const card = (job) => (
<Card key={job.id} variant="outlined" sx={{ "&:hover":{boxShadow:3, bgcolor:"aliceblue", cursor:"default"}}}>
        <CardContent sx={{"&.MuiCardContent-root":{paddingBottom:0}}} >

        <Typography  variant="h6" component="p" sx={{overflow:"hidden",whiteSpace:"nowrap", textOverflow:"ellipsis"}}>
            {job.title}
          </Typography>
          <Stack direction={"row"} alignItems={"flex-start"}>
          <Typography color='#474d6a'  variant="subtitle2" component="div">
            {job.company_name}
          </Typography>
          <hr />
            <PlaceIcon sx={{fontSize:18}} />
          <Typography color='#474d6a' gutterBottom variant="subtitle2" component="div">
            {job.location}
          </Typography>
          </Stack>
          
          
          <Box sx={{mt:1, height: "2rem"}}>
          <Typography id="desc" variant="body2" sx={{ color: 'text.secondary', display:"-webkit-box", overflow:"hidden", textOverflow:"ellipsis" }} >
          {job.description}
          </Typography>
          </Box>
        </CardContent>
      <CardActions sx={{ml:1,mt:1}}>
        <Button size="small" color="primary" sx={{textTransform:"none", bgcolor:"transparent", "&:hover":{color:"blueviolet"}}} onClick={()=>handleViewDetails(job)}>
          View Details
        </Button>
      </CardActions>
      </Card>
  )
  
  return (
    <>
    <DisplayToggle alignment={alignment} handleAlignment={handleAlignment} />
    <Grid2 spacing={1} p={2} alignContent={"flex-start"}  bgcolor={"#dddddd"} container>
    {jobs.map((job)=>{
      if(alignment === "column")
        return ( 
        <Grid2 size={{lg:3, md: 4, sm: 6}}>
        {card(job)}
      </Grid2 > 
      )
      else
          return(
            <Grid2 sx={{width:{sm:"80%"}, ml:"auto", mr:"auto"}}>
              {card(job)}
          </Grid2 > 
        )
    }
    )}
    </Grid2>

    <JobDetails selectedJob={selectedJob} open={open} setOpen={setOpen}/>
</>    
    
  )
}
