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
import { getdatadb2 } from '../services/api2';
import { useEffect } from 'react';
import { CodeID } from '../Redux/codebyid';
import { writecode_run } from '../Redux/writecode';
function AlgoNav() {
  const [data2, setData2] = useState(null);
  const [langchange, setLang] = useState('Select language');
  const dispatch = useDispatch();
  const { lang, additionalData } = useSelector((state)=>state.Selectlang1);
  const DispatchID=useDispatch()
  useEffect(() => {
    if (data2) {
      data2.map((el) => {
        if (lang === el.language) {
          let codedefination=el.taskCode;
          console.log(codedefination)
          DispatchID(CodeID(codedefination))
          DispatchID(writecode_run({writecode:codedefination}))
        }
      });
    }
  }, [data2, lang]);

  const atmid=useSelector((state)=>state.FontSlice)
  const id2 = localStorage.getItem('id1');
  const handleLanguage = async (langCode, langName,additionalData) => {
    try {
      dispatch(lang1({ language: langCode, additionalData: additionalData }))
      setLang(langName);
      const data = await getdatadb2(id2);
      setData2(data);
    } catch (err) {
      console.log(err);
    }
  };

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
              <NavDropdown title={langchange} id="basic-nav-dropdown" className='link3'>
                
                <NavDropdown.Item  className='droplink' onClick={() => handleLanguage('py', 'Python','python')}>
                  Python
                </NavDropdown.Item>
                <NavDropdown.Item  className='droplink' onClick={() => handleLanguage('js', 'JavaScript','javascript')}>
                  JavaScript
                </NavDropdown.Item>
               
                {/* <NavDropdown.Item href="#action/3.4" className='droplink'onClick={handellanguage1}>
                JavaScript
                </NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={() => handleLanguage('ts', 'TypeScript',"typescript")}>
                TypeScript
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={() => handleLanguage('cpp', 'C++','cpp')}>
                  C++
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={() => handleLanguage('java', 'Java',"java")}>
                Java
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'  onClick={() => handleLanguage('csharp', 'C#',"csharp")}>
                  C#
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('c')}}>
                  c
                </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#link" className='link4'><i className="fa-sharp fa-solid fa-share-nodes"></i></Nav.Link>
      

                  {/* <Timer></Timer> */}
            
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