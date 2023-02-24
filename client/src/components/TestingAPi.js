import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './TestingApi.css'
import axios from "axios";
import { getdatadb ,getdatadb2} from "../services/api2";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
const CodePage = () => {
  const id2 = localStorage.getItem('id1');
  const lang=useSelector((state)=>state.Selectlang1)
  // const id2=useSelector((state)=>state.FontSlice)
  // console.log(id2)
  const [id, setId] = useState(1);
  const history =useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData1() {
      const data = await getdatadb(id2);
      setData(data);
    }

    fetchData1();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getdatadb(id2);
    setData(data)
  };
  console.log(data)
  return (
    <div style={{ color: 'black' }}>
      {data && (

        <div >
          <div className="getcode1">
            {data.task_name}
          </div>
          <div style={{ color: 'white !important' }} className='getidcode' dangerouslySetInnerHTML={{ __html: data.task_defination }}></div>
          {/* {data.task_defination} */}
          {data.solution}
        </div>
      )}
    </div>

  );
};

export default CodePage