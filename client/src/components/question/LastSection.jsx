import { Box, Typography } from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';

const LastSection = () => {
  const nobr=useSelector((state)=>state.WorkSetting1)
  return (
    <Box sx={{width:"100%",height:"100vh",backgroundColor:"white" ,color:'red',padding:'0px'}}>
      <Typography sx={{color:'red'}}>

        hiiii  {nobr}
      </Typography>
    </Box>
  ) 
}

export default LastSection