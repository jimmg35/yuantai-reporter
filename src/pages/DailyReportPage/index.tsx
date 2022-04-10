import React, { useState, useContext } from 'react'
import './index.scss'
import dailyReportParamsContext from '../../routes/DailyReportContext'
// import { IDailyReport, selectDailyReport } from '../../store/slice/dailyReport'
// import { useSelector } from 'react-redux'
// const formatter = new Intl.NumberFormat(undefined, { style: 'decimal' })

const DailyReportPage = () => {
  // const dispatch = useDispatch()
  // const dailyReport: IDailyReport = useSelector(selectDailyReport)
  const paramManager = useContext(dailyReportParamsContext)

  const [firmName, setfirmName] = useState<string>(paramManager.params.titleInfo.firmName)
  const [reportName, setreportName] = useState<string>(paramManager.params.titleInfo.reportName)
  const [constructionName, setconstructionName] = useState<string>(paramManager.params.reportInfo.constructionName)
  const [author, setauthor] = useState<string>(paramManager.params.reportInfo.author)
  const [level, setlevel] = useState<number>(paramManager.params.reportInfo.level)
  const [day, setday] = useState<number>(paramManager.params.reportInfo.day)
  const [lastDayDebt, setlastDayDebt] = useState<number>(paramManager.params.debtInfo.lastDayDebt)
  const [accumulateWageDebt, setaccumulateWageDebt] = useState<number>(paramManager.params.debtInfo.accumulateWageDebt)

  const [incomePayee0, setincomePayee0] = useState<string>(paramManager.params.incomeInfo.data[0].payee)
  const [incomeValue0, setincomeValue0] = useState<number>(paramManager.params.incomeInfo.data[0].value)
  const [incomePayee1, setincomePayee1] = useState<string>(paramManager.params.incomeInfo.data[1].payee)
  const [incomeValue1, setincomeValue1] = useState<number>(paramManager.params.incomeInfo.data[1].value)
  const [incomePayee2, setincomePayee2] = useState<string>(paramManager.params.incomeInfo.data[2].payee)
  const [incomeValue2, setincomeValue2] = useState<number>(paramManager.params.incomeInfo.data[2].value)
  const [incomeLastDay, setincomeLastDay] = useState<number>(paramManager.params.incomeInfo.lastDayAccumulation)

  const handleRoute2Preview = () => {
    console.log(incomeValue0, incomeValue1, incomeValue2)
  }

  return (
    <div className='form-page'>
      <div className='form-container'>

        <p className='form-title'>標題資訊</p>
        <div className='form-block'>
          <div className='row-set'>
            <div className='input-set'>
              <label>公司名稱</label>
              <input type="text" value={firmName} onChange={(event) => { setfirmName(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>報價單名稱</label>
              <input type="text" value={reportName} onChange={(event) => { setreportName(event.target.value) }}></input>
            </div>
          </div>
        </div>

        <p className='form-title'>報價單資訊</p>
        <div className='form-block'>
          <div className='row-set'>
            <div className='input-set'>
              <label>工程名稱</label>
              <input type="text" value={constructionName} onChange={(event) => { setconstructionName(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>製表人</label>
              <input type="text" value={author} onChange={(event) => { setauthor(event.target.value) }}></input>
            </div>
          </div>

          <div className='row-set'>
            <div className='input-set'>
              <label>層</label>
              <input type="number" min='0' value={level} onChange={(event) => { setlevel(Number(event.target.value)) }}></input>
            </div>
            <div className='input-set'>
              <label>天</label>
              <input type="number" min='0' value={day} onChange={(event) => { setday(Number(event.target.value)) }}></input>
            </div>
          </div>

          <div className='row-set'>
            <div className='input-set'>
              <label>日期(YYYY-MM-DD)</label>
              <input type="text" value={constructionName} onChange={(event) => { setconstructionName(event.target.value) }}></input>
            </div>
          </div>
        </div>

        <p className='form-title'>賒款資訊</p>
        <div className='form-block'>
          <div className='row-set'>
            <div className='input-set'>
              <label>前日賒款</label>
              <input type="number" min='0' value={lastDayDebt} onChange={(event) => { setlastDayDebt(Number(event.target.value)) }}></input>
            </div>
            <div className='input-set'>
              <label>累計工資未結金額</label>
              <input type="number" min='0' value={accumulateWageDebt} onChange={(event) => { setaccumulateWageDebt(Number(event.target.value)) }}></input>
            </div>
          </div>
        </div>

        <p className='form-title'>入款資訊</p>
        <div className='form-block'>
          <div className='row-set'>
            <div className='input-set'>
              <label>入款人(1)</label>
              <input type="text" value={incomePayee0} onChange={(event) => { setincomePayee0(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>入款金額(1)</label>
              <input disabled={incomePayee0 === ''} type="number" min='0' value={incomeValue0} onChange={(event) => { setincomeValue0(Number(event.target.value)) }}></input>
            </div>
          </div>

          <div className='row-set'>
            <div className='input-set'>
              <label>入款人(2)</label>
              <input type="text" value={incomePayee1} onChange={(event) => { setincomePayee1(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>入款金額(2)</label>
              <input disabled={incomePayee1 === ''} type="number" min='0' value={incomeValue1} onChange={(event) => { setincomeValue1(Number(event.target.value)) }}></input>
            </div>
          </div>

          <div className='row-set'>
            <div className='input-set'>
              <label>入款人(3)</label>
              <input type="text" value={incomePayee2} onChange={(event) => { setincomePayee2(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>入款金額(3)</label>
              <input disabled={incomePayee2 === ''} type="number" min='0' value={incomeValue2} onChange={(event) => { setincomeValue2(Number(event.target.value)) }}></input>
            </div>
          </div>

          <div className='row-set'>
            <div className='input-set'>
              <label>前日累計入款金額</label>
              <input type="number" min='0' value={incomeLastDay} onChange={(event) => { setincomeLastDay(Number(event.target.value)) }}></input>
            </div>
          </div>
        </div>

        <div className='form-block form-item-info'>
          <div className='input-set'>
            <button onClick={handleRoute2Preview}>預覽PDF</button>
          </div>
        </div>

        {/*  */}
        {/* <div className='form-block form-firm-info'>
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
        </div> */}

      </div>
    </div>
  )
}

export default DailyReportPage
