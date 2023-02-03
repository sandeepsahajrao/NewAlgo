import { Container } from '@mui/material'
import React from 'react'
import Details from './Details'
import LastSection from './LastSection'

import Qnav from './Qnav'


const Question = () => {
  return (
    <Container>
        <Qnav></Qnav>
        <Details></Details>
        <LastSection></LastSection>
    </Container>
  )
}

export default Question