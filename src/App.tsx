/* eslint-disable */
import React from 'react'
import './App.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
// import { FormPage, PreviewPage, NoMatch } from './routes'
import FormPage from './pages/FormPage'
import PreviewPage from './pages/PreviewPage'
import NoMatchPage from './pages/NoMatchPage'
import paperParamsContext, { paperParams } from './routes/PaperContext'

const App: React.FC = () => {
  return (
    <HashRouter>
      <paperParamsContext.Provider value={paperParams}>
        <Routes>
          <Route path={"/"} element={<FormPage />} />
          <Route path={"/preview"} element={<PreviewPage />} />
          <Route path={"*"} element={<NoMatchPage />} />
        </Routes>
      </paperParamsContext.Provider>
    </HashRouter>
  )
}

export default App
