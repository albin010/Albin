import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from '../portfolio/pages/home/Home'
import Project from '../portfolio/pages/home/Project'
const HomeRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<Homepage/>}/> 
      <Route path='/project' element={<Project/>}/>
    </Routes>
  )
}

export default HomeRouter
