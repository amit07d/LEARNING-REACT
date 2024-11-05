import React from 'react'
import { useParams } from 'react-router-dom'


const ParamComp = () => {
const {id} = useParams()

  return (
      <div>
        params: {id}
   </div>
  )
}

export default ParamComp