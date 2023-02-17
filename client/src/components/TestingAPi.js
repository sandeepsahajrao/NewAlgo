import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './TestingApi.css'
import axios from "axios";
import { getdatadb ,getdatadb2} from "../services/api2";
import { useSelector,useDispatch } from "react-redux";
import { Font3 } from "../Redux/FontSlice";
const CodePage = () => {
  const lang=useSelector((state)=>state.Selectlang1)
  const Dispatch=useDispatch()
  const [id, setId] = useState(1);
  const history =useNavigate();
  const [data, setData] = useState(null);

  const handleClick = () => {
    history.push(`/code/task/id=${id}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getdatadb(id);
   
    setData(data)

    Dispatch(Font3(id))

  };

  return (
    <div style={{color:'black'}}>
      <form onSubmit={handleSubmit}>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)}style={{color:'black'}} />
        <button type="submit" style={{color:'black'}}>Get Data</button>
      </form>
      <button onClick={handleClick} style={{color:'black'}}>Go to Task ID {id}</button>
      <div>
        {data && (
            
          <div >
            <div className="getcode1">
              {data.task_name}
            </div>
            <div style={{color:'white !important'}} className='getidcode' dangerouslySetInnerHTML={{ __html: data.task_defination }}></div>
              {/* {data.task_defination} */}
             {data.solution}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePage