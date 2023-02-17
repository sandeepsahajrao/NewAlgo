import axios from "axios";
// https://assessment.hicounselor.com/ide?id=1&for=programing

const url = 'http://localhost:4000'
let id1=3
export const getdatadb= async (id) => {
  try {
    const response = await axios.get(`${url}/getdb/task/${id}`);
    const data=response.data[0]
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getdatadb2= async (id) => {
  try {
    const response = await axios.get(`${url}/getdb/taskcode/${id}`);
    const data=response.data
    return data;
  } catch (error) {
    console.log(error);
  }
};