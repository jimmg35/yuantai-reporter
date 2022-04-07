import React, { useState } from 'react'
import './index.scss'
import { IDailyReport } from '../../store/slice/dailyReport'

// const formatter = new Intl.NumberFormat(undefined, { style: 'decimal' })

const DailyReportPage = () => {
  const [dailyReport, setdailyReport] = useState<IDailyReport>({})
  return (
    <div className='form-page'>
      <div className='form-container'>

        <div className='form-block form-title'>
          <div className='row-set'>
            <div className='input-set'>
              <label>公司名稱</label>
              <input type="text" value={dailyReport.titleInfo.firmName} onChange={(event) => { settitle(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>報價單名稱</label>
              <input type="text" value={dailyReport.titleInfo.reportName} onChange={(event) => { setsubTitle(event.target.value) }}></input>
            </div>
          </div>
        </div>

        <div className='form-block form-firm-info'>
          <div className='row-set'>
            <div className='input-set'>
              <label>公司聯絡人</label>
              <input type="text" value={contact} onChange={(event) => { setcontact(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>業主單位</label>
              <input type="text" value={firstParty} onChange={(event) => { setfirstParty(event.target.value) }}></input>
            </div>
          </div>
          <div className='row-set'>
            <div className='input-set'>
              <label>統一編號</label>
              <input type="text" value={uniNumber} onChange={(event) => { setuniNumber(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>施工地址</label>
              <input type="text" value={constructionAddress} onChange={(event) => { setconstructionAddress(event.target.value) }}></input>
            </div>
          </div>
          <div className='row-set'>
            <div className='input-set'>
              <label>公司電話</label>
              <input type="text" value={firmTel} onChange={(event) => { setfirmTel(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>工程名稱</label>
              <input type="text" value={constructionName} onChange={(event) => { setconstructionName(event.target.value) }}></input>
            </div>
          </div>
          <div className='row-set'>
            <div className='input-set'>
              <label>公司地址</label>
              <input type="text" value={firmAddress} onChange={(event) => { setfirmAddress(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>報價日期</label>
              <input type="text" value={quotationDate} onChange={(event) => { setquotationDate(event.target.value) }}></input>
            </div>
          </div>
        </div>

        <div className='form-block form-item-info'>
          <div className='input-set'>
            <button onClick={() => { setitemDialogOpen(true) }}>新增工項</button>
          </div>
          {
            items.length === 0
              ? <></>
              : <div className='input-set'>
                <table className='table'>
                  <thead>
                    <tr className='row'>
                      <th>刪除</th>
                      <th className='hiddens'>項次</th>
                      <th className='left'>工程項目</th>
                      <th className='hiddens'>單位</th>
                      <th className='right hiddens'>單價</th>
                      <th className='right hiddens'>數量</th>
                      <th className='right hiddens'>金額</th>
                      <th className='center hiddens'>備註</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      items.map((row, index) => {
                        return <tr key={index} className='row'>
                          <td className='center'>
                            <IconButton color="error" component="span" onClick={() => { handleRemoveItem(index) }}>
                              <DeleteIcon />
                            </IconButton>
                          </td>
                          <td className='center hiddens'>{row.serial}</td>
                          <td>{row.name}</td>
                          <td className='center hiddens'>{row.unit}</td>
                          <td className='right hiddens'>{row.unitPrice ? formatter.format(row.unitPrice) : ''}</td>
                          <td className='right hiddens'>{row.amount ? formatter.format(row.amount) : ''}</td>
                          <td className='right hiddens'>{row.unitPrice && row.amount ? formatter.format(row.unitPrice * row.amount) : ''}</td>
                          <td className='center hiddens'>{row.memo}</td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
          }

        </div>

        <div className='form-block form-item-info'>
          <div className='input-set'>
            <button onClick={handleRoute2Preview}>預覽PDF</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DailyReportPage
