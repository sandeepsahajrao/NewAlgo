import {  Container, HStack, Text,Box } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import React from 'react'
import './makef1.css'

const MakeF1 = () => {
  return (
    <Container width={'100%'} flexWrap={'wrap'} mt={'50px'}>
      {/* overflow={'hidden'} add whenever needed */}
      
      <HStack mt={'10px'}>
        <Text textAlign={'center'} mb={'0px'} pl={'15px'} className="promtcolor">Difficulty : 
        </Text>
        <Box  pl={'15px'} borderRadius={'md'} bg={'green'} color={'green'}  h={17} w={17}></Box>
        <Text className="promtcolor" pl={'15px'}>Category</Text>
        <Text className="promtcolor" pl={'15px'}>Successfully Submissions : 123424+</Text>
      </HStack>
      <HStack mt={'30px'} mb={'15px'} >
        <Text mb={'0px'} textAlign={'center'} pl={'15px'} mr={'7px'} className="promtcolor">Validations Subsequent </Text>
        <i className="fa-solid fa-circle validation" style={{color:'red'}} ></i>
        <i className="fa-regular fa-star star1"></i>
      </HStack>
      <Box width={'90%'}>

    
        <HStack pl={'15px'} >
          <Box fontSize={'14px'} wordBreak={'warp'} >
        
              Given two non-empty arrays of integers, write a function that determines
              whether the second array is a subsequence of the first one.
     
              A subsequence of an array is a set of numbers that aren't necessarily adjacent
              in the array but that are in the same order as they appear in the array. For
              instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
              <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
              that a single number in an array and the array itself are both valid
              subsequences of the array.
   
            <h3>Sample Input</h3>
            <pre><span>array</span> = [5, 1, 22, 25, 6, -1, 8, 10]
              <span>sequence</span> = [1, 6, -1, 10]
            </pre>
            <h3>Sample Output</h3>
            <pre>true
            </pre>
            </Box>
        </HStack>
      </Box>


      <Box>

        <Accordion allowToggle pl={'15px'}>
          <AccordionItem>
            <h2>
              <AccordionButton bgColor={'#15314b'} pl={'10px'}>
                <Box as="span" flex='1' textAlign='left' fontSize={'14px'}>
                  Hint1
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  fontSize={'14px'}>
              You can solve this question by iterating through the main input array once.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton bgColor={'#15314b'} pl={'10px'}>
                <Box as="span" flex='1' textAlign='left' fontSize={'14px'}>
                  Hint2
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  fontSize={'14px'}>
              You can solve this question by iterating through the main input array once.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton bgColor={'#15314b'} pl={'10px'}>
                <Box as="span" flex='1' textAlign='left' fontSize={'14px'}>
                  Hint3
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  fontSize={'16px'}>
              You can solve this question by iterating through the main input array once.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton bgColor={'#15314b'} pl={'10px'}>
                <Box as="span" flex='1' textAlign='left' fontSize={'14px'}>
                  Optimal Space &amp; Time Complexity
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  fontSize={'16px'}>
            O(n) time | O(1) space - where n is the length of the array
            </AccordionPanel>
          </AccordionItem>


        </Accordion>
      </Box>
  
    </Container>
  )
}

export default MakeF1