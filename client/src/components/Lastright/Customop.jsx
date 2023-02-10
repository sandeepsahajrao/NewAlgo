import React from 'react';
import { submitcode } from '../../services/api';
import { useSelector } from 'react-redux';
import { writecode } from '../../services/api';
const Customop = () => {
  let s= writecode()
  s.then((res)=>{
    console.log(res.data)
  })
const submitted_code=useSelector((state)=>state.writecode)
  return (
    <>
{/* default view  */}
    {
      submitted_code.writecode!==null?
      <div>Your code runnig please wait for sec  {submitted_code.writecode}</div>
      :
    <div>output here  {submitted_code.writecode}</div>
    }
    </>
  )
}

export default Customop