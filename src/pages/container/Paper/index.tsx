import React from 'react'
import './index.scss'

export interface IPaper {
  pid: string
}

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

    </div>
  )
}

export default Paper
