import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Editor from './Editor'
import Faq from './Faq'

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}>
      <Routes>
        <Route exact path='/' element={<Editor />} />
        <Route exact path='/faq' element={<Faq />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
