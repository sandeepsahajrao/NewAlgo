import React, { useReducer, useState } from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import { BsMoon,BsSun} from 'react-icons/bs';
import './setting.css'

import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,

  SimpleGrid,

  Box,
  Heading,

} from '@chakra-ui/react'



import { useDisclosure } from '@chakra-ui/react';
import './setting.css';
// import  from '../reducers /Btnc';
import {btntheme,Font1,editorthem,editorkey,btnonff}from '../reducers/Btnc';
// import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Font3 } from '../../Redux/FontSlice';
import codethem from '../../Redux/codethem';

const Settingicon = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  // const [font1,setfont2]=useState('1x')
  const initial='#15314b'
  const initialc='#15314b'
  const inieditor='Monokai'
  const inieditorkey='Sublime'
  const [changecolor,dispatch]=useReducer(btntheme,initial);
  const [offcolor,dispatchc]=useReducer(btnonff,initialc);
  // const [changecolor1,dispatch1]=useReducer(btntheme1,initial);

  const [editor,dispatche]=useReducer(editorthem,inieditor);
  const [editorkey1,dispatchkey]=useReducer(editorkey,inieditorkey);

  const Dispatch=useDispatch()
  const Font3s=useSelector((state)=>state.FontSlice)


  return (
    <>


      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}


      >
        <DrawerOverlay />
        <DrawerContent bgColor={'var(--blueback)'} className='maingridsetting' >
          <DrawerCloseButton _hover={{ bgColor: "#626ee3" ,color:"red"}} width={'40px'} height={'40px'} bgColor={'var(--blueback)'} ml={'-20px'} outline={"none" } border={'none'}/>
          <DrawerHeader mt={'20px'} mb={'20px'}>
            <Heading as='h3' fontWeight={'400'} lineHeight={'1.3'}
              fontSize={'18px'}>Workspace Setting</Heading>
          </DrawerHeader>


          <SimpleGrid columns={2} spacingX='20px' spacingY='20px' textAlign={'center'} justifyContent={'center'}>
            <Box className='boxst2'>Theme</Box>
            <Box className='boxst4'>
            <Button leftIcon={<BsMoon />} bgColor={changecolor} colorScheme='teal' variant='solid' className='boxst3' onClick={()=>dispatch({type:'dark'})}>
                Dark
              </Button>
            <Button leftIcon={<BsSun />}  bgColor={changecolor} colorScheme='teal' variant='solid' className='boxst3' onClick={()=>dispatch({type:'sun'})}>
                Light
              </Button>
            </Box>
            <Box className='boxst2'>Font Size</Box>
            <Box className='boxst'>
            <NavDropdown title={Font3s} id="basic-nav-dropdown" className='settinglink'>
                
                <NavDropdown.Item href="#action/3.2" className='droplink' onClick={()=>{Dispatch(Font3(16))}}>
                  16
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={()=>{Dispatch(Font3(18))}}>
                  18
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={()=>{Dispatch(Font3(20))}}>
                  20
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={()=>{Dispatch(Font3(24))}}>
                  24
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={()=>{Dispatch(Font3(28))}}>
                  28
                </NavDropdown.Item>
              </NavDropdown>
            </Box>
            <Box className='boxst2'>Editor Theme</Box>
            <Box className='boxst'>
            <NavDropdown title={editor} id="basic-nav-dropdown" className='settinglink'>
                
                <NavDropdown.Item href="#action/3.2" className='droplink' onClick={()=>{Dispatch(codethem('monokai'))}}>

                  Monokai
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{Dispatch(codethem("One Dark"))}}>
                  One Dark
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{Dispatch(codethem('Material'))}}>
                  Material
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{Dispatch(codethem("Dracula"))}}>
                  Dracula
                </NavDropdown.Item>
              </NavDropdown>
            </Box>
            <Box className='boxst2'>Editor Key Maps</Box>
            <Box className='boxst'>
            <NavDropdown title={editorkey1} id="basic-nav-dropdown" className='settinglink'>
                
                <NavDropdown.Item href="#action/3.2" className='droplink' onClick={()=>dispatchkey({type:'Sublime'})}>

                  Sublime
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchkey({type:'Vim'})}>
                  Vim
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchkey({type:'Emacs'})}>
                  Emacs
                </NavDropdown.Item>
              </NavDropdown>
            </Box>
            <Box className='boxst2'>Whiteboard Mode</Box>
            <Box className='boxst4'>
              <Button bgColor={offcolor} colorScheme='teal' variant='solid' className='boxst3' onClick={()=>dispatchc({type:"on"})}>
                  On
                </Button>
              <Button  bgColor={offcolor} colorScheme='teal' variant='solid' className='boxst3' onClick={()=>dispatchc({type:"off"})}>
                  Off
                </Button>
            </Box>
          </SimpleGrid>

        </DrawerContent>
      </Drawer>
      <Box className='link6 setflex' ref={btnRef} onClick={onOpen}>

        <i className="fa-solid fa-gear"></i>
      </Box>

    </>
  )
}

export default Settingicon