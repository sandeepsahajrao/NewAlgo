import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useRef } from 'react';

import './algonav.css';
import Timer from './subcompo/Timer';
import Settingicon from './subcompo/Settingicon';
import Question from './question/Question';

// store work 
import { useDispatch, useSelector } from 'react-redux';
import { lang1 } from '../Redux/Workspaceslice';

function AlgoNav() {
  const Dispatch=useDispatch()
  const [Lang,setlinks]=useState('javascript')


  const lang=useSelector((state)=>state.Selectlang1)
  // console.log(lang)
  
  return (
    <>

      <Navbar bg="light" expand="lg" className='sticky-top algonav'>
        <Container className='container'>
          <Navbar.Brand href="/" className='navtitle linkt'>Hi-Counselor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Nav">
              <Nav.Link href="/question" target={'_parent'} className='link1'><i className="fa-solid fa-bars"></i></Nav.Link>
              <Nav.Link href="https://www.algoexpert.io/questions/river-sizes" className='link2'><i className="fa-solid fa-arrow-right-long"></i></Nav.Link>
              {/* <Nav.Link href="#link" className='link3'>Link</Nav.Link> */}
              <NavDropdown title={lang} id="basic-nav-dropdown" className='link3'>
                
                <NavDropdown.Item  className='droplink' onClick={()=>{Dispatch(lang1('typescript'))}}>
                typescript
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#action/3.4" className='droplink'onClick={()=>{Dispatch(lang1('java'))}}>
                Java
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{Dispatch(lang1('python'))}}>
                  Python
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{Dispatch(lang1('css'))}}>
                  CSS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{Dispatch(lang1('golang'))}}>
                  golang
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'onClick={()=>{Dispatch(lang1('c++'))}}>
                  c++
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('c')}}>
                  c
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className='link4'><i className="fa-sharp fa-solid fa-share-nodes"></i></Nav.Link>
      

                  <Timer></Timer>
            
            </Nav>
            <Nav className='n2'>
              <Nav.Link href="#link" className='link5'><i className="fa-solid fa-bug"    ></i></Nav.Link>
              
              <Settingicon></Settingicon>
              {/* <Nav.Link href="#link" className='link6' > <i className="fa-solid fa-gear"></i></Nav.Link> */}
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AlgoNav;