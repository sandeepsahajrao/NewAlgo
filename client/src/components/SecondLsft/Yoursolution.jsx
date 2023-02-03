import { Box, Container } from '@chakra-ui/react'
import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/webpack-resolver';
import { useState } from 'react';
import { style } from '@mui/system';
import './yoursolution.css'
import { useEffect } from 'react';
import { codeAdd } from '../../Redux/CodeSlice';
// import { codeAdd } from './CodeSlice';

// store work
import { useDispatch, useSelector } from 'react-redux';

// import { useRef } from 'react';
// code1={code1}
// setcode1={setcode1}
// handelcode={handelcode}

const Yoursolution = () => {
  // subcribe value from store  fontSlice is reduce name
  // const {
  //   code1,
  //   setCode1,
  // }=props
  const Font3s = useSelector((state) => state.FontSlice)
  const lang = useSelector((state) => state.Selectlang1)

  const Dispatch=useDispatch()

  // get code and update onchange fuction
  const [code, setCode] = useState('');


   // set value of code
   const handleChange = (newCode) => {
    
    setCode(newCode);
    // setCode1(code1)
    setCode(newCode)
    // Dispatch(codeAdd(newCode));

  };



  return (
    <Container width={'100%'} mt={'50px'}>
      <AceEditor
        // ref={editorRef}
        placeholder={`Write your code here ${lang}`}
        mode={lang}
        theme="monokai"
        name="blah2"
        // onKeyDown={handleBackspace} 
        onChange={handleChange}
        // onLoad={onLoad}
        fontSize={`${Font3s}px`}
    
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={false}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} style={{ width: "100%", backgroundColor: 'var(--compoback)' }} className='yoursolution' />
    </Container>
  )
}
export default Yoursolution













