import React from 'react';
import { useDispatch } from 'react-redux';

import { Typography,Button, TextField } from '@mui/material';
// import styled from "styled-components";
import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import './loginpage.css'
import { useState } from 'react';
import { authenticateSignup ,authenticatelogin} from '../../services/api';
import { toggleloginame } from '../../Redux/Authlogin';


const Loginbox=styled(Box)`
    color:red;
    // background-color:red;
    height:auto;
    width:600px;
`
const Imgwarper=styled(Box)`
    background: #626ee3;
    width:250px;
    paddling:0px 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Loginboxwarpper=styled(Box)`


    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:25px 35px;
    width:350px;
    height:100%;

`

const obj={
    FirstName:'',
    LastName:'',
    UserName:'',
    Email:"",
    Password:''

}
const obj3={
    Email:'',
    Password:''
}
const obj2={
    login:{
        view:'login'
    },
    signup:{
        view:'signup'
    }
}
const Loginpage = ({open,setopen}) => {
    //send open and setopen as prop for dialog for handling login button onclick
    const [signupdata, setinput] = useState(obj)
    const [account, settoggleac] = useState(obj2.login)
    const [login_click, set_login_click] = useState(obj3)
// this authlogin sending as prop to hovertab for  changing the name 
    // const [authlogin,setautologin] = useState(false)
    const Dispatch=useDispatch()
 // importing authentication from service's signup data onchange 
    const inpubox=(e)=>{
        setinput({
            ...signupdata,[e.target.name]:e.target.value
        })
    }


    // loginbutten function onChange
    const loginuser=(e)=>{
        set_login_click({
            ...login_click,[e.target.name]:e.target.value
        })
        
    }
    // importing authentication from service's signup data onClick
    const handelinput3=async(signupdata)=>{
      const signup_user_data=await authenticateSignup(signupdata);
      console.log(signup_user_data)
      if(!signup_user_data) return;
    //   setinput({})
        handleClose()
    
    }

    // handel login function onchange function by uisng onClick 
    const handelinput4=async(login_click)=>{
    
        
        const logindata=await authenticatelogin(login_click);
        if(logindata.status===200){
            console.log(`${logindata.data.UserName} logged In Successfully`)
        }
        handleClose()
        Dispatch(toggleloginame({name:logindata.data.UserName,Boolean1:true
        }))
    }


    const handelacclounttogle=()=>{
        settoggleac(obj2.signup)
    }
    const handelacclounttogle2=()=>{
        settoggleac(obj2.login)
    }

    const handleClose=()=>{
        setopen(false)
    }

    return (
       
          <Dialog 
            open={open}
            onClose={handleClose}>
            <Loginbox>
                <Box sx={{display:'flex',height:'80%'}}>

                    <Imgwarper>
                        
                        <Typography variant='h6' sx={{color:'black',padding:'0px 10px',marginBottom:'30px'}}>Hi-Counselor <Typography variant= 'span' sx={{color:'white'}}>Editor</Typography></Typography>
                        <Typography variant='h6' sx={{padding:'0px 10px',fontSize:'15px',color:'white',backgroundColor:'skyblue'}}> Welcome To The Coding World </Typography>
                    </Imgwarper>
                    {
                       account.view==='signup'?

                        <Loginboxwarpper >
                            <Typography variant='h5' sx={{color:'black'}}>Sign-Up</Typography>
                            <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your First name" variant="standard" name='FirstName' required/>
                            <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your last name" variant="standard" name='LastName'/>
                            <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your User name" variant="standard" name='UserName'/>
                            <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your Email" variant="standard" name='Email'/>
                            <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your password" variant="standard" name='Password'/>
                            <Button variant="outlined" type='button' onClick={()=>handelinput3(signupdata)}  sx={{color:'red',margin:'20px 0px',width:'100%'}}>Signup</Button>
                            <Typography> Already Have a Account <Typography variant= 'span' sx={{color:'blue',cursor:'pointer'}} onClick={handelacclounttogle2}>Login</Typography>
                            </Typography>
                        </Loginboxwarpper>
                    :
                        <Loginboxwarpper >
                            <Typography variant='h5' sx={{color:'black'}}>Sign-In</Typography>
                            <TextField onChange={(e)=> loginuser(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your Email" variant="standard" name='Email'/>
                            <TextField onChange={(e)=> loginuser(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your Password" variant="standard" name='Password'/>
                            <Button variant="outlined" type='button'   sx={{color:'red',margin:'20px 0px',width:'100%'}} onClick={()=>handelinput4(login_click)}>LogIn</Button>
                            <Typography> Don't have account <Typography variant= 'span' sx={{color:'blue',cursor:'pointer'}} onClick={handelacclounttogle}>Create Accont</Typography>
                            </Typography>
                        </Loginboxwarpper>
                    }
                </Box>
            </Loginbox>
        </Dialog>

      );
}

export default Loginpage