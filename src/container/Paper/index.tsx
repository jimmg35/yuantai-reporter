import React, { useState, useEffect } from 'react'
import './index.scss'

export interface ITitleSet {
  title: string
  subtitle: string
}

export interface IFirmInfo {
  contact: string
  firstParty: string
  uniNumber: string
  constructionAddress: string
  firmTel: string
  constructionName: string
  firmAddress: string
  quotationDate: string
}

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
  titleSet: ITitleSet
  firmInfo: IFirmInfo
  items: IItem[]
  taxRatio: number
}

// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// })
const formatter = new Intl.NumberFormat(undefined, { style: 'decimal' })

const Paper = (props: IPaper) => {
  const [totalPrice, settotalPrice] = useState<number>(0)

  useEffect(() => {
    let total = 0
    props.items.forEach((item) => {
      if (item.unitPrice && item.amount) {
        total += item.unitPrice * item.amount
      }
    })
    settotalPrice(total)
  }, [])

  return (
    <div className='paper-a4' id={props.pid}>

      <div className='header'>
        <p className='title'>{props.titleSet.title}</p>
        <p className='subtitle'>{props.titleSet.subtitle}</p>
      </div>

      <div className='firm-info'>
        <table className='table'>
          <tbody>
            <tr className='row'>
              <td className='item'>公司聯絡人:</td>
              <td className='value'>{props.firmInfo.contact}</td>
              <td className='item'>業主單位:</td>
              <td className='value'>{props.firmInfo.firstParty}</td>
            </tr>
            <tr className='row'>
              <td className='item'>統一編號:</td>
              <td className='value'>{props.firmInfo.uniNumber}</td>
              <td className='item'>施工地址:</td>
              <td className='value'>{props.firmInfo.constructionAddress}</td>
            </tr>
            <tr className='row'>
              <td className='item'>公司電話:</td>
              <td className='value'>{props.firmInfo.firmTel}</td>
              <td className='item'>工程名稱:</td>
              <td className='value'>{props.firmInfo.constructionName}</td>
            </tr>
            <tr className='row'>
              <td className='item'>公司地址:</td>
              <td className='value'>{props.firmInfo.firmAddress}</td>
              <td className='item'>報價日期:</td>
              <td className='value'>{props.firmInfo.quotationDate}</td>
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
              props.items.map((row, index) => {
                return <tr key={index} className='row'>
                  <td className='center'>{row.serial}</td>
                  <td>{row.name}</td>
                  <td className='center'>{row.unit}</td>
                  <td className='right'>{row.unitPrice ? formatter.format(row.unitPrice) : ''}</td>
                  <td className='right'>{row.amount ? formatter.format(row.amount) : ''}</td>
                  <td className='right'>{row.unitPrice && row.amount ? formatter.format(row.unitPrice * row.amount) : ''}</td>
                  <td>{row.memo}</td>
                </tr>
              })
            }
            <tr className='row'>
              <td></td>
              <td>小計:</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className='row'>
              <td></td>
              <td>以上報價稅率:</td>
              <td></td>
              <td></td>
              <td>稅:</td>
              <td className='right'>{totalPrice}</td>
              <td></td>
            </tr>
            <tr className='row'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='right'>{totalPrice * props.taxRatio}</td>
              <td></td>
            </tr>
            <tr className='row'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>總計:</td>
              <td className='right'>{totalPrice + totalPrice * props.taxRatio}</td>
              <td></td>
            </tr>
            <tr className='row'>
              <td className='memoArea' colSpan={4}>備註:</td>
              <td className='memoArea' colSpan={3}></td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Paper
