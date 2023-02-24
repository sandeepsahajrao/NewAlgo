import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getdatadb } from "../../services/api2";
import { useEffect } from "react";
import "./lastSection.css";
import QuestionsList from "./QuestionsList";

const LastSection = () => {

  const nobr = useSelector((state) => state.WorkSetting1);
  const [value, setValue] = useState("1");
  const atmid = useSelector((state) => state.FontSlice);
  const [changestate, setChangestate] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const top100Films = [
    { label: "Hard" },
    { label: "Medium" },
    { label: "Easy" },
    { label: "very Hard" },
  ];

  const obj={
    easy:1,
    medium:2,
    hard:3,
    veryHard:4,
    allquestion:5
  }
  const [filter1,setfilename]=useState(obj)

  const sumbitted1=()=>{
    window.location.href='http://localhost:3000/code'
    setChangestate(0);
  }
  console.log(changestate);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          color: "red",
          padding: "0px",
          overflow: "scroll",
          marginTop:'64px'
        }}
        className='maintabbox'
      >
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className='maiantab'
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
              >
                <Tab label='All Question' value='1' />
                <Tab label='Easy' value='2' />
                <Tab label='Medium' value='3' />
                <Tab label='Hard' value='4' />
                <Tab label='Very Hard' value='5' />
              </TabList>
              <Box className='filter'>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={top100Films}
                  sx={{ width: 300, color: "black", borderRadius: 4 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='filter'
                      className='textfield'
                      // sx={{backgroundColor:'white',color:'black !important'}}
                    />
                  )}
                />
              </Box>
            </div>
          </Box>
          <TabPanel value='1'>
            <QuestionsList sumbitted1={sumbitted1} filter1={filter1.allquestion} ></QuestionsList>
          </TabPanel>

          <TabPanel value='2' >Easy
            <QuestionsList sumbitted1={sumbitted1} filter1={filter1.easy}   ></QuestionsList>
          </TabPanel>

          <TabPanel value='3' >Medium
            <QuestionsList sumbitted1={sumbitted1} filter1={filter1.medium} ></QuestionsList>
          </TabPanel>

          <TabPanel value='4' >Hard
            <QuestionsList sumbitted1={sumbitted1} filter1={filter1.hard}  ></QuestionsList>
          </TabPanel>

          <TabPanel value='5' >Very Hard
            <QuestionsList sumbitted1={sumbitted1} filter1={filter1.veryHard}></QuestionsList>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default LastSection;
