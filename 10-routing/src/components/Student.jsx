import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
  const {id} = useParams();
  return (
    <div>Student id is {id}</div>
  )
}

export default Student