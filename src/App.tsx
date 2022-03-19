/* eslint-disable */
import React from 'react'
import './App.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { FormPage, PreviewPage, NoMatch } from './routes'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<FormPage />} />
        <Route path={"/preview"} element={<PreviewPage />} />
        <Route path={"*"} element={<NoMatch />} />
      </Routes>
    </HashRouter>
  )
}

export default App
