import React from 'react';
import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
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
  
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
          
          
        >
          <AlertDialogOverlay  />
  
          <AlertDialogContent width={'200px'}>
            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to discard all of your notes? 44 words will be
              deleted.
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
      </>
    )
}

export default Timer