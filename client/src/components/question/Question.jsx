import { Container } from '@mui/material'
import React from 'react'
import Details from './Details'
import LastSection from './LastSection'

import Qnav from './Qnav'
import './qnav.css'


const Question = () => {
  return (
    <>
    <div className='mainquestiondiv'>

    <Qnav></Qnav>
    <Details></Details>
    <LastSection></LastSection>
    </div>
    </>

  )
}

export default Question