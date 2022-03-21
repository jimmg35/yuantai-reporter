/* eslint-disable */
import React, { useContext, useState } from 'react'
import './index.scss'
import paperParamsContext from '../../routes/PaperContext'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import { IItem } from '../../container/Paper'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const formatter = new Intl.NumberFormat(undefined, { style: 'decimal' })

const FormPage: React.FC = () => {
  const navigate = useNavigate()
  const paperParamManager = useContext(paperParamsContext)
  const [itemDialogOpen, setitemDialogOpen] = useState<boolean>(false)

  const [title, settitle] = useState<string>(paperParamManager.paperParams.titleSet.title)
  const [subTitle, setsubTitle] = useState<string>(paperParamManager.paperParams.titleSet.subtitle)

  const [contact, setcontact] = useState<string>(paperParamManager.paperParams.firmInfo.contact)
  const [uniNumber, setuniNumber] = useState<string>(paperParamManager.paperParams.firmInfo.uniNumber)
  const [firmTel, setfirmTel] = useState<string>(paperParamManager.paperParams.firmInfo.firmTel)
  const [firmAddress, setfirmAddress] = useState<string>(paperParamManager.paperParams.firmInfo.firmAddress)
  const [firstParty, setfirstParty] = useState<string>('')
  const [constructionAddress, setconstructionAddress] = useState<string>('')
  const [constructionName, setconstructionName] = useState<string>('')
  const [quotationDate, setquotationDate] = useState<string>('')

  const [items, setitems] = useState<IItem[]>(paperParamManager.paperParams.items)

  const [serial, setserial] = useState<string>('')
  const [name, setname] = useState<string>('')
  const [unit, setunit] = useState<string>('')
  const [unitPrice, setunitPrice] = useState<string>('')
  const [amount, setamount] = useState<string>('')
  const [memo, setmemo] = useState<string>('')

  const handleItemDialogClose = () => {
    setitemDialogOpen(false)
    setserial('')
    setname('')
    setunit('')
    setunitPrice('')
    setamount('')
    setmemo('')
  }

  const handleItemDialogSave = () => {
    setitemDialogOpen(false)
    setserial('')
    setname('')
    setunit('')
    setunitPrice('')
    setamount('')
    setmemo('')
    const newItem: IItem = {
      serial: serial,
      name: name,
      unit: unit,
      unitPrice: Number(unitPrice),
      amount: Number(amount),
      memo: memo
    }
    setitems((oldArray) => oldArray.concat(newItem))
  }

  const handleRoute2Preview = () => {
    paperParamManager.paperParams.titleSet = {
      title: title,
      subtitle: subTitle
    }
    paperParamManager.paperParams.firmInfo = {
      contact: contact,
      firstParty: firstParty,
      uniNumber: uniNumber,
      constructionAddress: constructionAddress,
      firmTel: firmTel,
      constructionName: constructionName,
      firmAddress: firmAddress,
      quotationDate: quotationDate
    }
    paperParamManager.paperParams.items = items
    navigate('/preview')
  }

  const handleRemoveItem = (removeIndex: number) => {
    const shallowItems = items
    setitems(shallowItems.filter((item, index) => index !== removeIndex))
  }

  return (
    <div className='form-page'>
      <div className='form-container'>

        <div className='form-block form-title'>
          <div className='row-set'>
            <div className='input-set'>
              <label>公司名稱</label>
              <input type="text" value={title} onChange={(event) => { settitle(event.target.value) }}></input>
            </div>
            <div className='input-set'>
              <label>報價單名稱</label>
              <input type="text" value={subTitle} onChange={(event) => { setsubTitle(event.target.value) }}></input>
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

      <Dialog open={itemDialogOpen} onClose={handleItemDialogClose}>
        <DialogTitle>請輸入工項</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="項次"
            type="text"
            fullWidth
            variant="standard"
            value={serial}
            onChange={(event) => { setserial(event.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="工程項目"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => { setname(event.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="單位"
            type="text"
            fullWidth
            variant="standard"
            value={unit}
            onChange={(event) => { setunit(event.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="單價"
            type="number"
            fullWidth
            variant="standard"
            value={unitPrice}
            onChange={(event) => { setunitPrice(event.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="數量"
            type="number"
            fullWidth
            variant="standard"
            value={amount}
            onChange={(event) => { setamount(event.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="備註"
            type="text"
            fullWidth
            variant="standard"
            value={memo}
            onChange={(event) => { setmemo(event.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleItemDialogClose}>取消</Button>
          <Button onClick={handleItemDialogSave}>儲存</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormPage
