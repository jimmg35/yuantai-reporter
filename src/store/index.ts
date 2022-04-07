import { configureStore } from '@reduxjs/toolkit'
import dailyReportReducer from './slice/dailyReport'

export default configureStore({
  reducer: {
    dailyReport: dailyReportReducer
  }
})
