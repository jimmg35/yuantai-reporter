/* eslint-disable */
import { createContext } from 'react'
import { IPaper } from '../../container/Paper'

// export const paperParams: IPaper = {
//   pid: 'paper',
//   titleSet: {
//     title: '元太開發工程有限公司',
//     subtitle: '報價單'
//   },
//   firmInfo: {
//     contact: '劉鎮賢(0913-576-159)',
//     firstParty: '義華建設',
//     uniNumber: '91086195',
//     constructionAddress: '台北市松江路',
//     firmTel: '(02)2555-0361',
//     constructionName: '南京葒新建工程(土方工程)',
//     firmAddress: '台北市南京西路354號3F',
//     quotationDate: '2021-12-27'
//   },
//   items: [
//     { serial: '一', name: '連續壁、扶壁' },
//     { serial: '1', name: '連續壁、扶壁棄土證明', unit: 'M3', unitPrice: 250, amount: 1206 },
//     { serial: '2', name: '連續壁、扶壁棄土運棄', unit: 'M3', unitPrice: 1350, amount: 1206 },
//     { serial: '二', name: '土方挖運棄' },
//     { serial: '1', name: '土方證明', unit: 'M3', unitPrice: 150, amount: 3322 },
//     { serial: '2', name: '土方挖運棄', unit: 'M3', unitPrice: 1200, amount: 3322 },
//     { serial: '3', name: '抽面水', unit: '式', unitPrice: 80000, amount: 1 },
//     { serial: '4', name: '垃圾運棄', unit: 'M3', unitPrice: 3000, amount: 1, memo: '車上方' }
//   ],
//   taxRatio: 0.05
// }

class PaperParamManager {
  public paperParams: IPaper

  constructor() {
    this.paperParams = {
      pid: 'paper',
      titleSet: {
        title: '元太開發工程有限公司',
        subtitle: '報價單'
      },
      firmInfo: {
        contact: '劉鎮賢(0913-576-159)',
        firstParty: '',
        uniNumber: '91086195',
        constructionAddress: '',
        firmTel: '(02)2555-0361',
        constructionName: '',
        firmAddress: '台北市南京西路354號3F',
        quotationDate: ''
      },
      items: [],
      taxRatio: 0.05
    }
  }
}

export const paperParamManager = new PaperParamManager()
const paperParamsContext = createContext(paperParamManager)
export default paperParamsContext
