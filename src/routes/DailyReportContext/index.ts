/* eslint-disable */
import { createContext } from 'react'
import { IDailyReport } from '../../store/slice/dailyReport'

class DailyReportParamManager {
    public params: IDailyReport

    constructor() {
        this.params = {
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
    }
}

export const dailyReportParamManager = new DailyReportParamManager()
const dailyReportParamsContext = createContext(dailyReportParamManager)
export default dailyReportParamsContext