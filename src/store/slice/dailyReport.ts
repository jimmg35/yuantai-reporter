import { createSlice } from '@reduxjs/toolkit'

interface ITitleInfo {
  firmName: string
  reportName: string
}

interface IReportInfo {
  constructionName: string
  author: string
  date: string
  level: number
  day: number
}

interface IDebtInfo {
  lastDayDebt: number
  accumulateWageDebt: number
}

interface IIncomeData {
  payee: string
  value: number
}

interface IIncomeInfo {
  data: IIncomeData[]
  lastDayAccumulation: number
  todayCount: number
  totalCount: number
}

interface ITransportationSpend {
  lastDayAccumulation: number
  todayCount: number
  totalCount: number
}

interface IVolumnSpend {
  lastDayAccumulation: number
  todayCount: number
  totalCount: number
}

interface ITransportationData {
  carType: string
  amount: number
  total: number
  price: number
  priceUnit: number
  note: string
}

interface ITransportationInfo {
  data: ITransportationData[]
  transportationSpend: ITransportationSpend
  volumnSpend: IVolumnSpend
}

interface IStaffData {
  staff: string
  hour: number
  totalPay: number
  note: string
}

interface IMachineData {
  machineName: string
  operator: string
  hour: number
  totalPay: number
  note: string
}

interface IStaffAndMachineInfo {
  staffData: IStaffData[]
  machineData: IMachineData[]
  lastDayAccumulation: number
  todayCount: number
  totalCount: number
}

interface IGroceryData {
  itemName: string
  price: number
}

interface IGroceryInfo {
  data: IGroceryData
  lastDayAccumulation: number
  todayCount: number
  totalCount: number
}

interface ITotalInfo {
  lastDayAccumulation: number
  todayCount: number
  totalCount: number
}

export interface IDailyReport {
  titleInfo: ITitleInfo
  reportInfo: IReportInfo
  debtInfo: IDebtInfo
  incomeInfo: IIncomeInfo
  transportationInfo: ITransportationInfo
  staffAndMachineInfo: IStaffAndMachineInfo
  groceryInfo: IGroceryInfo
  totalInfo: ITotalInfo
  note: string
}

interface IInitState {
  dailyReports: IDailyReport[]
}

const init = {
  dailyReports: []
} as IInitState

interface IAddReportAction {
  payload: IDailyReport
  type: string
}

export const dailyReportSlice = createSlice({
  name: 'dailyReport',
  initialState: init,
  reducers: {
    addDailyReport: (state, action: IAddReportAction) => {
      state.dailyReports.push(action.payload)
    }
  }
})

export const selectdailyReport = (state: any) => {
  return state.dailyReport
}
export const { addDailyReport } = dailyReportSlice.actions
export default dailyReportSlice.reducer
