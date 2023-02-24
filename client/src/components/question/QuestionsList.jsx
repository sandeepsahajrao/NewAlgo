import { border } from "@chakra-ui/react";
import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getdatadb3 } from "../../services/api2";
import { useDispatch,useSelector } from "react-redux";
import { Font3 } from "../../Redux/FontSlice";
import { addQuestion } from "../../Redux/attempedquestion";
const QuestionsList = ({ changestate,sumbitted1, filter1 }) => {
  const [questions, setQuestions] = useState([]);
  const Dispatch=useDispatch()

  useEffect(() => {
    async function fetchData1() {
      const res = await getdatadb3();
      let data2 = res;
      if (filter1 !== 5) {
        data2 = res.filter((item) => item.task_type === filter1);
      }
      setQuestions(data2 || []);
    }

    fetchData1();
  }, [filter1]);

  const handleQuestion = (questionId) => {
    // find the question that was clicked
    const clickedQuestion = questions.find((q) => q.id === questionId);
   const id1=clickedQuestion.id
   localStorage.setItem('id1', id1);
    Dispatch(Font3(id1))
    // update the is_active status of the clicked question
    clickedQuestion.is_active.data[0] = changestate;

    // create a new array of questions with the updated question
    const updatedQuestions = questions.map((q) =>
      q.id === questionId ? clickedQuestion : q
    );

    // set the new array of questions in state
    setQuestions(updatedQuestions);
      // dispatch the addQuestion action to add the ID of the attempted question to the store
    // Dispatch(addQuestion(2));

  };

  return (
    <>
      {questions.map((question, index) => (
        <Box
          key={question.id}
          sx={{ width: "100%", height: "55px" }}
          className="questionbox"
          onClick={() => handleQuestion(question.id)}
        >
          <Box className="easysumitted1">
            <Typography className="Typography1" sx={{ marginRight: "20px" }}>
              {index + 1}
            </Typography>
            <Typography className="Typography">{question.task_name}</Typography>
          </Box>
          <Box className="easysumitted" onClick={sumbitted1}>
            <Typography
              className="Typography"
              sx={{
                backgroundColor:
                  question.task_type === 1
                    ? "#abffe1"
                    : question.task_type === 2
                    ? "#cce9fc"
                    : question.task_type === 3
                    ? "#ffc5b4"
                    : question.task_type === 4
                    ? "#ffb4b4"
                    : "",
                padding: "5px 10px",
              }}
            >
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
                variant="outlined"
                sx={{ marginRight: "20px", color: "gray" }}
              >
                {question.is_active.data[0] === changestate
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

export default QuestionsList
