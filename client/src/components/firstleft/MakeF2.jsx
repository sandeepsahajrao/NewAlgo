import { Container, Textarea } from '@chakra-ui/react'
import React from 'react'

const MakeF2 = () => {
  return (
    <Container mt={'10px'} pl={'15px'} >
      <Textarea placeholder='Write whatever you want.' bgColor={'#15314b'} width={'100%'} outline={'none'} border={'none'}></Textarea>
    </Container>
  )
}

export default MakeF2