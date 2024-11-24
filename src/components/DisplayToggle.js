import React from 'react'
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewListIcon from '@mui/icons-material/ViewList';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export const DisplayToggle = ({alignment, handleAlignment}) => {
    
  
    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        sx={{width:"98%", mt:1, right:"0px", justifyContent:"flex-end", mr:5, display:{xs:"none", sm:"flex"}}}
      >
        <ToggleButton value="column" >
          <ViewColumnIcon />
        </ToggleButton>
        <ToggleButton value="row">
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
}
