import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlgoNav from './components/AlgoNav'
import Demo from './components/Demo';
import Question from './components/question/Question';
import LastSection from './components/question/LastSection';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'
const App = () => {
  return (
    <>

      <div className='appcontainer'>
        <Provider store={store}>

          <BrowserRouter>
            {/* <Demo></Demo> 
          <AlgoNav /> */}
            <Routes>
              <Route path="/" element={<Question />} />
              <Route path="/code" element={<Demo></Demo>} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
      {/* className='appcontainer2' */}
    </>


  )
}

export default App

{/* <BrowserRouter>
<Demo></Demo>
<AlgoNav />
<Routes>
    <Route path="/questions" element={<Question/>} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} />
</Routes>
</BrowserRouter> */}

