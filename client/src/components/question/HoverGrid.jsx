import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
// import { AiFillCaretDown } from "react-icons/ai";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HoverGrid() {
  return (

    <Box sx={{ width: '100%' }} className="maingridbox">
      {/* <AiFillCaretDown sx={{width:'50px',backgroundColor:"red"}}></AiFillCaretDown> */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
      sx={{padding:"15px"}}
      className="maingrid">
        <Grid item xs={6} className="maingriditem1 gtwo">
          <Item className='itemgrid1'>
            <Link href='#'>
              <Box sx={{display:'flex',flexDirection:"column",alignItems:'flex-start'}}>
                <Typography variant='h3' sx={{fontSize:"18px",fontWeight:"600"}}>
                    AlgoExpert
                </Typography>
                <Typography sx={{fontSize:"14px",fontWeight:"400"}}>
                    Ace the codeing Interview 
                </Typography>
              </Box>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6} className="maingriditem1">
          <Item className='itemgrid2'>
            <Link href='#'>
              <Box sx={{display:'flex',flexDirection:"column",alignItems:'flex-start'}}>
                <Typography variant='h3' sx={{fontSize:"18px",fontWeight:"600"}}>
                    SystemsExpert
                </Typography>
                <Typography sx={{fontSize:"14px",fontWeight:"400"}}>
                Ace the Systems Design Interviews
                </Typography>
              </Box>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6} className="maingriditem1 gtwo">
          <Item className='itemgrid3'>
            <Link href='#'>
              <Box sx={{display:'flex',flexDirection:"column",alignItems:'flex-start'}}>
                <Typography variant='h3' sx={{fontSize:"18px",fontWeight:"600"}}>
                    FrontendExpert
                </Typography>
                <Typography sx={{fontSize:"14px",fontWeight:"400"}}>
                Ace the frontend Interview 
                </Typography>
              </Box>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6} className="maingriditem1">
          <Item className='itemgrid4'>
            <Link href='#'>
              <Box sx={{display:'flex',flexDirection:"column",alignItems:'flex-start'}}>
                <Typography variant='h3' sx={{fontSize:"18px",fontWeight:"600"}}>
                    MLExperts
                </Typography>
                <Typography sx={{fontSize:"14px",fontWeight:"400"}}>
                Ace the Machine Learing Interview 
                </Typography>
              </Box>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6} className="maingriditem1 gtwo">
          <Item className='itemgrid5'>
            <Link href='#'>
              <Box sx={{display:'flex',flexDirection:"column",alignItems:'flex-start'}}>
                <Typography variant='h3' sx={{fontSize:"18px",fontWeight:"600"}}>
                    Programing Experts
                </Typography>
                <Typography sx={{fontSize:"14px",fontWeight:"400"}}>
                    Learn to code
                </Typography>
              </Box>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6} className="maingriditem1">
          <Item className='itemgrid6'>
            <Link href='#'>
              <Box sx={{display:'flex',flexDirection:"column",alignItems:'flex-start'}}>
                <Typography variant='h3' sx={{fontSize:"18px",fontWeight:"600"}}>
                    Blockchain Experts
                </Typography>
                <Typography sx={{fontSize:"14px",fontWeight:"400"}}>
                    Learn The Blockchain development 
                </Typography>
              </Box>
            </Link>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}