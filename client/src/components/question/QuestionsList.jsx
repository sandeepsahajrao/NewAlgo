import { border } from "@chakra-ui/react";
import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getdatadb3 } from "../../services/api2";

const QuestionsList = ({ changestate, sumbitted1 ,filter1}) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps

    async function fetchData1() {
      const res = await getdatadb3();
      // fliter res by task_type
      let data2 = res;
      if (filter1 !== 5) {
        data2 = res.filter((item) => item.task_type === filter1);
      }

      setQuestions(data2 || []);
    }

    fetchData1();

  }, [filter1]);
  
  console.log(filter1);

  return (
    <>
      {questions.map((question, index) => (
        <Box
          key={question.id}
          sx={{ width: "100%", height: "55px" }}
          className='questionbox'
     
        >
          <Box className='easysumitted1'>
            <Typography className='Typography1' sx={{ marginRight: "20px" }}>
              {index + 1}
            </Typography>
            <Typography className='Typography'>{question.task_name}</Typography>
          </Box>
          <Box className='easysumitted' >
            {/* <Typography className='Typography'>
              {question.task_type === 1 ? "Easy" : "Hard"}
            </Typography> */}
            <Typography className='Typography'  sx={{ backgroundColor: question.task_type === 1 ? '#abffe1' : question.task_type === 2 ? '#cce9fc' : question.task_type === 3 ? '#ffc5b4' : question.task_type === 4 ? '#ffb4b4' : '',padding:"5px 10px" }}>
              {question.task_type === 1
                ? "Easy"
                : question.task_type === 2
                ? "Medium"
                : question.task_type === 3
                ? "Hard"
                : question.task_type === 4
                ? "Very Hard"
                : ""}
            </Typography>
            <Box>
              <Button
                variant='outlined'
                sx={{ marginRight: "20px", color: "gray" }}
               
              >
                {questions[0].is_active.data[0] === { changestate }
                  ? "Question Attempted"
                  : "Question Not Attempted"}
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default QuestionsList;
