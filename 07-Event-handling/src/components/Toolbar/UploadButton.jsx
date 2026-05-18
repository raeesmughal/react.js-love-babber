import React from 'react'
import Button from './Button'

const UploadButton = () => {
  return (
    <Button onClick={()=>{alert('Uploading')}}>
        Upload Image
    </Button>
  )
}

export default UploadButton