import React from 'react'
import './index.scss'
import permissionDenied from '../../assets/permissionDenied.png'
import { useNavigate } from 'react-router-dom'

const PermissionDeniedPage = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/')
  }

  return (
    <div className='iadc-permissionDenied'>
      <div className='contentContainer'>
        <img src={permissionDenied}></img>
        <p>404沒有此分頁</p>
        <button
          className='btn'
          onClick={handleButtonClick}
        >返回主頁</button>
      </div>
    </div>
  )
}

export default PermissionDeniedPage
