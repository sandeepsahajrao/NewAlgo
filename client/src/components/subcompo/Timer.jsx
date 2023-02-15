import React from 'react';
import Stopwatch from './Timer2';
import { Box, Container, IconButton, useDisclosure } from '@chakra-ui/react';
import './timer.css'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    AlertDialogCloseButton 
  } from '@chakra-ui/react'

const Timer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
      <Container width={'200px'} >

        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
         
          
        >
          <AlertDialogOverlay  />
  
          <AlertDialogContent width={'200px'}  className='timer1'>
            <AlertDialogHeader>Set Time</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Stopwatch></Stopwatch>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme='red' ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
            <Box className='timer linktime'  onClick={onOpen}
              
            >
                <i className="fa-solid fa-clock"></i>
                <span>00:00:00</span>
            </Box>
      </Container>
      </>
    )
}

export default Timer