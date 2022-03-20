/* eslint-disable */
import React, { useContext } from 'react'
import './index.scss'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Paper from '../../container/Paper'
import paperParamsContext from '../../routes/PaperContext'

const PreviewPage: React.FC = () => {
  const paperParamManager = useContext(paperParamsContext)
  const handleExportPDF = async () => {
    const doc = new jsPDF()
    const image = await html2canvas(document.getElementById('paper') as HTMLElement, {
      scale: 2
    })
    doc.addImage({ imageData: image, x: 0, y: 0, width: 210, height: 297 })
    doc.save('test.pdf')
  }

  return (
    <div className='preview-page'>
      <div className='container'>
        <Paper {...paperParamManager.paperParams}></Paper>
        <button className='export-btn' onClick={handleExportPDF}>輸出pdf</button>
      </div>
    </div>
  )
}

export default PreviewPage
