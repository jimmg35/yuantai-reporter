/* eslint-disable */
import React from 'react'
import './App.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
// import { FormPage, PreviewPage, NoMatch } from './routes'
import FormPage from './pages/FormPage'
import PreviewPage from './pages/PreviewPage'
import NoMatchPage from './pages/NoMatchPage'
import paperParamsContext, { paperParamManager } from './routes/PaperContext'
import DailyReportPage from './pages/DailyReportPage'

const App: React.FC = () => {
  return (
    <HashRouter>
      <paperParamsContext.Provider value={paperParamManager}>
        <Routes>
          <Route path={"/daily"} element={<DailyReportPage />} />
          <Route path={"/price"} element={<FormPage />} />
          <Route path={"/pricepreview"} element={<PreviewPage />} />
          <Route path={"*"} element={<NoMatchPage />} />
        </Routes>
      </paperParamsContext.Provider>
    </HashRouter>
  )
}

export default App
