/* eslint-disable */
import React, { useContext, useState } from 'react'
import './index.scss'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Paper from '../../container/Paper'
import paperParamsContext from '../../routes/PaperContext'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

const PreviewPage: React.FC = () => {
  const paperParamManager = useContext(paperParamsContext)
  const [fileNameDialogOpen, setfileNameDialogOpen] = useState<boolean>(false)
  const [filename, setfilename] = useState<string>('無檔名')

  const handleExportPDF = async () => {
    setfileNameDialogOpen(false)
    const doc = new jsPDF()
    const image = await html2canvas(document.getElementById('paper') as HTMLElement, {
      scale: 2
    })
    doc.addImage({ imageData: image, x: 0, y: 0, width: 210, height: 297 })
    doc.save(`${filename}.pdf`)
  }

  return (
    <div className='preview-page'>
      <div className='container'>
        <div className='form-block'>
          <Paper {...paperParamManager.paperParams}></Paper>
          <button className='export-btn' onClick={() => { setfileNameDialogOpen(true) }}>輸出pdf</button>
        </div>
      </div>

      <Dialog open={fileNameDialogOpen}>
        <DialogTitle>請輸入檔名</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="項次"
            type="text"
            fullWidth
            variant="standard"
            value={filename}
            onChange={(event) => { setfilename(event.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExportPDF}>輸出</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PreviewPage
