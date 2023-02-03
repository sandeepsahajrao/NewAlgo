
import React from 'react'
import { Box,Typography,Button } from '@mui/material';

const Details = () => {
  return (
    <Box sx={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:"column",
    width:"100%",
    height:"100vh"
    }}>
        <Typography variant="h1"  sx={{margin:"0px 0px 40px 0px",fontSize:'38px'}}>170 Coding Interview Questions</Typography>
        <Typography  variant="h4"  sx={{marginBottom:"0px 0px 60px 0px",fontSize:'17px'}}>The practice you need to ace the coding interviews.</Typography>
        <Button variant='contained' sx={{marginTop:"40px",width:'228px',height:'50px',fontSize:'16px',backgroundColor:"#626ee3",marginBottom:"0px 226px 0px 226px"}}>Buy AlgoExpert</Button>
    </Box>
  )
}

export default Details