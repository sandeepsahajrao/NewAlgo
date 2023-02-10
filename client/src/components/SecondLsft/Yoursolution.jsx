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
  const [submitcode,setsubmitcode]=useState(submitcode_obj);
  const Dispath=useDispatch()

  const Dispatch = useDispatch();

  // get code and update onchange fuction
  const [code, setCode] = useState("");

  // set value of code
  const handleChange = (newCode) => {
    setCode(newCode);
    // setCode1(code1)
    setCode(newCode);
    // Dispatch(codeAdd(newCode));
  };

  const handelruncode = async() => {
    let obj={
      language:lang,
      writecode:code

    }
    await writecode(obj);

    // wait for actio
    setsubmitcode({
      language:lang,
      writecode:code
    })
    Dispatch(writecode_run({ language: lang, writecode: code }));

  };

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
                  placeholder={`Write your code here ${lang}`}
                  mode={lang}
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
                  value={code}
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
