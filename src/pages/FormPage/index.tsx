/* eslint-disable */
import React, { useContext, useState } from 'react'
import './index.scss'
import paperParamsContext from '../../routes/PaperContext'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button';

const FormPage: React.FC = () => {
  const paperParamManager = useContext(paperParamsContext)
  const [itemDialogOpen, setitemDialogOpen] = useState<boolean>(false)

  const [title, settitle] = useState<string>(paperParamManager.paperParams.titleSet.title)
  const [subTitle, setsubTitle] = useState<string>(paperParamManager.paperParams.titleSet.subtitle)

  const [contact, setcontact] = useState<string>(paperParamManager.paperParams.firmInfo.contact)
  const [uniNumber, setuniNumber] = useState<string>(paperParamManager.paperParams.firmInfo.uniNumber)
  const [firmTel, setfirmTel] = useState<string>(paperParamManager.paperParams.firmInfo.firmTel)
  const [firmAddress, setfirmAddress] = useState<string>(paperParamManager.paperParams.firmInfo.firmAddress)

  const [firstParty, setfirstParty] = useState<string>('')
  const [contructionAddress, setcontructionAddress] = useState<string>('')
  const [constructionName, setconstructionName] = useState<string>('')
  const [quotationDate, setquotationDate] = useState<string>('')

  const handleItemDialogClose = () => {
    setitemDialogOpen(false)
  }

  const handleItemDialogSave = () => {
    setitemDialogOpen(false)
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
              <input type="text" value={contructionAddress} onChange={(event) => { setcontructionAddress(event.target.value) }}></input>
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
          />
          <TextField
            autoFocus
            margin="dense"
            label="工程項目"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="單位"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="單價"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="數量"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="金額"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="備註"
            type="text"
            fullWidth
            variant="standard"
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
