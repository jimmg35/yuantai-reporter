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
  data: IGroceryData[]
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
  dailyReport: IDailyReport
}

const init = {
  dailyReport: {
    titleInfo: {
      firmName: '元太開發工程',
      reportName: '支出統計表(日報表)'
    },
    reportInfo: {
      constructionName: '',
      author: 'YURA',
      date: '',
      level: 0,
      day: 0
    },
    debtInfo: {
      lastDayDebt: 0,
      accumulateWageDebt: 0
    },
    incomeInfo: {
      data: [
        {
          payee: '',
          value: 0
        },
        {
          payee: '',
          value: 0
        },
        {
          payee: '',
          value: 0
        }
      ],
      lastDayAccumulation: 0,
      todayCount: 0,
      totalCount: 0
    },
    transportationInfo: {
      data: [
        {
          carType: '',
          amount: 0,
          total: 0,
          price: 0,
          priceUnit: 0,
          note: ''
        },
        {
          carType: '',
          amount: 0,
          total: 0,
          price: 0,
          priceUnit: 0,
          note: ''
        },
        {
          carType: '',
          amount: 0,
          total: 0,
          price: 0,
          priceUnit: 0,
          note: ''
        },
        {
          carType: '',
          amount: 0,
          total: 0,
          price: 0,
          priceUnit: 0,
          note: ''
        }
      ],
      transportationSpend: {
        lastDayAccumulation: 0,
        todayCount: 0,
        totalCount: 0
      },
      volumnSpend: {
        lastDayAccumulation: 0,
        todayCount: 0,
        totalCount: 0
      }
    },
    staffAndMachineInfo: {
      staffData: [
        {
          staff: '',
          hour: 0,
          totalPay: 0,
          note: ''
        },
        {
          staff: '',
          hour: 0,
          totalPay: 0,
          note: ''
        },
        {
          staff: '',
          hour: 0,
          totalPay: 0,
          note: ''
        },
        {
          staff: '',
          hour: 0,
          totalPay: 0,
          note: ''
        }
      ],
      machineData: [
        {
          machineName: '',
          operator: '',
          hour: 0,
          totalPay: 0,
          note: ''
        },
        {
          machineName: '',
          operator: '',
          hour: 0,
          totalPay: 0,
          note: ''
        },
        {
          machineName: '',
          operator: '',
          hour: 0,
          totalPay: 0,
          note: ''
        },
        {
          machineName: '',
          operator: '',
          hour: 0,
          totalPay: 0,
          note: ''
        },
        {
          machineName: '',
          operator: '',
          hour: 0,
          totalPay: 0,
          note: ''
        }
      ],
      lastDayAccumulation: 0,
      todayCount: 0,
      totalCount: 0
    },
    groceryInfo: {
      data: [
        {
          itemName: '',
          price: 0
        },
        {
          itemName: '',
          price: 0
        },
        {
          itemName: '',
          price: 0
        },
        {
          itemName: '',
          price: 0
        },
        {
          itemName: '',
          price: 0
        }
      ],
      lastDayAccumulation: 0,
      todayCount: 0,
      totalCount: 0
    },
    totalInfo: {
      lastDayAccumulation: 0,
      todayCount: 0,
      totalCount: 0
    },
    note: ''
  }
} as IInitState

// interface IContent {
//   value: string | number
//   path: string
// }

// interface IAddStringAction {
//   payload: IContent
//   type: string
// }

export const dailyReportSlice = createSlice({
  name: 'dailyReport',
  initialState: init,
  reducers: {
    // changeValue: (state, action: IAddStringAction) => {
    //   console.log(state)
    // }
  }
})

export const selectDailyReport = (state: any) => {
  return state.dailyReport.dailyReport
}
// export const { } = dailyReportSlice.actions
export default dailyReportSlice.reducer
