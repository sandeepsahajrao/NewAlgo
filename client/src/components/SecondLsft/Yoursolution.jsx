import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/webpack-resolver";
import { useState } from "react";
import { style } from "@mui/system";
import "./yoursolution.css";
import { useEffect } from "react";
import { codeAdd } from "../../Redux/CodeSlice";
import { CodeID } from "../../Redux/codebyid";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { writecode } from "../../services/api";
import { writecode_run } from "../../Redux/writecode";

const submitcode_obj={
  language:'',
  writecode:''
}
const Yoursolution = () => {
 const Codename=useSelector((state)=>state.ThemFont3)
  const Font3s = useSelector((state) => state.FontSlice);
  const lang = useSelector((state) => state.Selectlang1);
  const codeDefination = useSelector((state) => state.codebyid);
  const codeDefination2 = useSelector((state) => state. writecode);
  const [submitcode,setsubmitcode]=useState(submitcode_obj);
  const Dispath=useDispatch()
  console.log(lang)
  // get code and update onchange fuction
  const [code, setCode] = useState(codeDefination2.writecode);
  console.log(codeDefination2.writecode)

  // set value of code
  const handleChange = (newCode) => {
    setCode(newCode);
    console.log('New code:', newCode);
    // dispatch(updateCodeById({ id: props.id, code: newCode }));
    
    Dispath(writecode_run({writecode:newCode}));
    Dispath(CodeID(newCode))
  };

  const handelruncode = async() => {
    let obj={
      language:lang,
      writecode:code

    }
 
    await writecode(obj);

    // wait for action
    setsubmitcode({
      language:lang,
      writecode:code
    })
    Dispath(writecode_run({ language: lang, writecode: code }));

  };
// console.log(lang);
// console.log(codeDefination2)
  return (
    <>

        <Tabs>

          <TabList
            bgColor={"#15314b"}
            height={40}
            justifyContent={"space-between"}
            className='navtab3'
          >
            <Tab
              _selected={{ color: "white", bg: "var(--compoback)" }}
              width={"131px"}
              height={"40px"}
              _hover={{ bgColor: "var(--hovertab)" }}
              bgColor={"#15314b"}
              border={"none"}
            >
              YourSolution
            </Tab>
            <HStack>
              <Button
                width={"93px"}
                height={"40px"}
                _hover={{ bgColor: "#0046C7" }}
                bgColor={"#003dae"}
                border={"none"}
                className='runbtn'
                onClick={()=>handelruncode(code)}
              >
                Run Code
              </Button>
            </HStack>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Container className='bottom'>
                {/* code editor */}
                <AceEditor
                  // ref={editorRef}
                  placeholder={`Write your code here ${lang.lang}`}
                  mode={lang.language}
                  theme={Codename}
                  // theme="monokai"
                  name='blah2'

                  // onKeyDown={handleBackspace}
                  onChange={handleChange}
                  // onLoad={onLoad}
                  fontSize={`${Font3s}px`}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={false}
      
                  value={codeDefination2.writecode}
                  readOnly={false} 
                  setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                  style={{ width: "100%",scrollbarWidth:'0px', backgroundColor: "var(--compoback)" }}
                  className='yoursolution'
                
                />
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>

    </>
  );
};
export default Yoursolution;
