import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Details from './Details';
import LastSection from './LastSection';
import Hcnav from './Hcnav';
import './hcnav.css'
import { changeTab } from '../../Redux/tabslice';

const Question = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.tabslice);
  return (
    <>
      <div className="mainquestiondiv">
        <Hcnav />
        {value === 0 && <LastSection category="Programming" />}
        {value === 1 && <LastSection category="SQL Queries" />}
        {value === 2 && <Details />}
      </div>
    </>
  );
};

export default Question;
