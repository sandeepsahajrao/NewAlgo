import { Box, Typography } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from "../../Redux/tabslice";
import { useEffect } from "react";
import "./lastSection.css";
const HcnavTab = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const [isProgrammingTabClicked, setIsProgrammingTabClicked] = React.useState(false);
    const [isSqlQueriesTabClicked, setIsSqlQueriesTabClicked] = React.useState(false);
    const [isItemThreeTabClicked, setIsItemThreeTabClicked] = React.useState(false);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if (newValue === 0) {
        setIsProgrammingTabClicked(true);
        setIsSqlQueriesTabClicked(false);
        setIsItemThreeTabClicked(false);
      } else if (newValue === 1) {
        setIsProgrammingTabClicked(false);
        setIsSqlQueriesTabClicked(true);
        setIsItemThreeTabClicked(false);
      } else if (newValue === 2) {
        setIsProgrammingTabClicked(false);
        setIsSqlQueriesTabClicked(false);
        setIsItemThreeTabClicked(true);
      }
      
    };
    useEffect(() => {
      dispatch(changeTab(value));
    }, [value]);
    console.log(isProgrammingTabClicked,isSqlQueriesTabClicked,isItemThreeTabClicked)
    return (
      <>
        <Box sx={{ width: "100%",color:'white' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='secondary'
            aria-label='secondary tabs example'
          >
            <Tab value={0} label='Programming' sx={{ color:'white' }}></Tab>
            <Tab value={1} label='SQL Queries' sx={{ color:'white' }}></Tab> 
            {/* <Tab value={2} label='Item Three' sx={{ color:'white' }}></Tab>  */}
          </Tabs>
        </Box>

      </>
    );
  };

export default HcnavTab;
