import React from 'react'
import './index.scss'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const PreviewPage: React.FC = () => {
  const handleExportPDF = async () => {
    const doc = new jsPDF()
    // html2canvas(document.getElementById('paper') as HTMLElement, {
    //   // onrendered: function(canvas) {
    //   //   var image = canvas.toDataURL("image/png");
    //   //   doc.addImage(image, 'JPEG', 0, 0, canvas.width, canvas.height);
    //   //   doc.save('test.pdf');
    //   // }
    // })
    const image = await html2canvas(document.getElementById('paper') as HTMLElement)
    doc.addImage({ imageData: image, x: 0, y: 0, width: 210, height: 297 })
    doc.save('test.pdf')
  }

  return (
    <div className='preview-page'>
      <div className='paper-a4' id='paper'>
        <p>安安你好阿</p>
      </div>
      <button onClick={handleExportPDF}>輸出pdf</button>
    </div>
  )
}

export default PreviewPage
