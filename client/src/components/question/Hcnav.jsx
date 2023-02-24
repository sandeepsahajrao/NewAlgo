// import styled from '@emotion/styled';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import React from "react";
import "./hcnav.css";
// import Hovertab from './Hovertab';
import HcnavTab from "./HcnavTab";

import Loginpage from "../logindata/Loginpage";
import { useSelector } from "react-redux";

const Sappbar = styled(AppBar)`
  background: #021f3a;
`;
const Boxm = styled(Box)`
  justify-content: center;
  align-items: flex-end;
`;

const Hcnav = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [open1, setopen] = useState(false);
  // const [showname,setname]=useState(false)
  const authlogin = useSelector((state) => state.AuthloginSlice);
  console.log(authlogin);

  const handelopen = () => {
    setopen(true);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Sappbar
      position='fixed'
      sx={{ backgroundColor: "#021f3a", boxShadow: "none" }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography className='logonew' variant='h6'>
            Hc
          </Typography>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Open-San",
              fontWeight: 700,
              fontSize: "30px",
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            HiCounSelor
          </Typography>

          {/* nav list tab */}

          <Boxm
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginLeft: "40px" },
            }}
          >
            {/* <Button   sx={{ my: 2}} className='qnavbtn'>Products</Button> */}
            {/* <Hovertab title={'Products'} >{title}</Hovertab>
              <Hovertab title={'Purchase' }>{title}</Hovertab>
              <Button   sx={{ my: 2,color:"white"}} className='qnavbtn'>Team</Button>
              <Button   sx={{ my: 2,color:"white"}} className='qnavbtn'>Content</Button> */}
            <HcnavTab></HcnavTab>
          </Boxm>

          {/* nav list tab */}

          <Box>
            <IconButton
              sx={{ p: 0, backgroundColor: "blue" }}
              onClick={handleClick}
              id='basic-button'
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup='true'
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                alt='Remy Sharp'
                src='/static/images/avatar/2.jpg'
                sx={{ backgroundColor: "blue" }}
              />
            </IconButton>

            <Menu
              id='basic-menu'
              anchorEl={open}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
          {/* logintoggle for showing your details */}

          {authlogin.Boolean1 === true ? (
            <Box>
              <Typography sx={{ color: "white", marginLeft: "10px" }}>
                {authlogin.name}
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{ color: "blue", marginLeft: "20px" }}
              onClick={() => handelopen()}
            >
              <Button
                sx={{
                  color: "white",
                  fontSize: "15px",
                  backgroundColor: "#626ee3",
                  padding: "7px 20px",
                  "&:hover": {
                    backgroundColor: "#4f5ad5",
                    cursor: "pointer",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Loginpage open={open1} setopen={setopen}></Loginpage>
    </Sappbar>
  );
};

export default Hcnav;
