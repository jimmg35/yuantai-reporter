import React from 'react'
import './index.scss'

export interface IItem {
  serial?: string
  name?: string
  unit?: string
  unitPrice?: number
  amount?: number
  memo?: string
}

export interface IPaper {
  pid: string
}

const fakeData: IItem[] = [
  { serial: '一', name: '連續壁、扶壁' },
  { serial: '1', name: '連續壁、扶壁棄土證明', unit: 'M3', unitPrice: 250, amount: 1206 },
  { serial: '2', name: '連續壁、扶壁棄土運棄', unit: 'M3', unitPrice: 1350, amount: 1206 },
  { serial: '二', name: '土方挖運棄' },
  { serial: '1', name: '土方證明', unit: 'M3', unitPrice: 150, amount: 498300 },
  { serial: '2', name: '土方挖運棄', unit: 'M3', unitPrice: 1200, amount: 3986400 },
  { serial: '3', name: '抽面水', unit: '式', unitPrice: 80000, amount: 80000 },
  { serial: '4', name: '垃圾運棄', unit: 'M3', unitPrice: 3000, amount: 3000, memo: '車上方' }
]

// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// })

const formatter = new Intl.NumberFormat(undefined, { style: 'decimal' })

const Paper = (props: IPaper) => {
  return (
    <div className='paper-a4' id={props.pid}>

      <div className='header'>
        <p className='title'>元太開發工程有限公司</p>
        <p className='subtitle'>報價單</p>
      </div>

      <div className='firm-info'>
        <table className='table'>
          <tbody>
            <tr className='row'>
              <td className='item'>公司聯絡人:</td>
              <td className='value'>劉鎮賢(0913-576-159)</td>
              <td className='item'>業主單位:</td>
              <td className='value'>義華建設</td>
            </tr>
            <tr className='row'>
              <td className='item'>統一編號:</td>
              <td className='value'>91086195</td>
              <td className='item'>施工地址:</td>
              <td className='value'>台北市松江路</td>
            </tr>
            <tr className='row'>
              <td className='item'>公司電話:</td>
              <td className='value'>(02)2555-0361</td>
              <td className='item'>工程名稱:</td>
              <td className='value'>南京葒新建工程(土方工程)</td>
            </tr>
            <tr className='row'>
              <td className='item'>公司地址:</td>
              <td className='value'>台北市南京西路354號3F</td>
              <td className='item'>報價日期:</td>
              <td className='value'> 2021/12/27</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='quotation-info'>
        <table className='table'>
          <thead>
            <tr className='row'>
              <th>項次</th>
              <th>工程項目</th>
              <th>單位</th>
              <th>單價</th>
              <th>數量</th>
              <th>金額</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody>
            {
              fakeData.map((row, index) => {
                return <tr key={index} className='row'>
                  <td>{row.serial}</td>
                  <td>{row.name}</td>
                  <td>{row.unit}</td>
                  <td className='right'>{row.unitPrice ? formatter.format(row.unitPrice) : ''}</td>
                  <td className='right'>{row.amount ? formatter.format(row.amount) : ''}</td>
                  <td className='right'>{row.unitPrice && row.amount ? formatter.format(row.unitPrice * row.amount) : ''}</td>
                  <td>{row.memo}</td>
                </tr>
              })
            }
            <tr className='row'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Paper
