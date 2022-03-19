/* eslint-disable */
import React from 'react'
import './index.scss'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Paper from '../container/Paper'

const PreviewPage: React.FC = () => {
  const handleExportPDF = async () => {
    const doc = new jsPDF()
    const image = await html2canvas(document.getElementById('paper') as HTMLElement, {
      scale: 2
    })
    doc.addImage({ imageData: image, x: 0, y: 0, width: 210, height: 297 })
    doc.save('test.pdf')
    // var link = document.createElement('a')
    // link.download = 'filename.png'
    // link.href = image.toDataURL()
    // link.click()
  }

  return (
    <div className='preview-page'>
      <div className='container'>
        {/* <div className='paper-a4' id='paper'>
          <p>dadds</p>
        </div> */}
        <Paper pid='paper'></Paper>
        <button className='export-btn' onClick={handleExportPDF}>輸出pdf</button>
      </div>
    </div>
  )
}

export default PreviewPage
