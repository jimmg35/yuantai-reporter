/* eslint-disable */
import React from 'react'
import './App.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
// import { FormPage, PreviewPage, NoMatch } from './routes'
import FormPage from './pages/FormPage'
import PreviewPage from './pages/PreviewPage'
import NoMatchPage from './pages/NoMatchPage'
import paperParamsContext, { paperParamManager } from './routes/PaperContext'
import dailyReportParamsContext, { dailyReportParamManager } from './routes/DailyReportContext'
import DailyReportPage from './pages/DailyReportPage'
import { Provider } from 'react-redux'
import store from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <dailyReportParamsContext.Provider value={dailyReportParamManager}>
        <paperParamsContext.Provider value={paperParamManager}>
          <HashRouter>
            <Routes>
              <Route path={"/daily"} element={<DailyReportPage />} />
              <Route path={"/price"} element={<FormPage />} />
              <Route path={"/pricepreview"} element={<PreviewPage />} />
              <Route path={"*"} element={<NoMatchPage />} />
            </Routes>
          </HashRouter>
        </paperParamsContext.Provider>
      </dailyReportParamsContext.Provider>
    </Provider>
  )
}

export default App
