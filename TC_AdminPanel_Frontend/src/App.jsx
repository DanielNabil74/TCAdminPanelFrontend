import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcomepage from './Pages/welcomePage';

function App() {
  return (
    <>
    <h1>I'm in home page</h1>
    <Router>
      <div style={{ backgroundColor: 'black' }}>
        <Routes>
          <Route path='/welcomepage' element={<Welcomepage />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;