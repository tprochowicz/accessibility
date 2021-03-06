import React from 'react'
import { ContrastContext } from '../contexts/ContrastContext'

const Wrapper = ({children}) => {
  const {contrastMode} = React.useContext(ContrastContext)

  return (<div className={`wrapper ${contrastMode ? 'contrastMode' : ''}`}>
    {children} 
  </div>)
}

export default Wrapper
