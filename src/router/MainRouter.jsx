import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../portfolio/App'
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  )
}

export default MainRouter
