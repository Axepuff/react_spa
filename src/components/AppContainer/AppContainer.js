import React from 'react'
import './AppContainer.css'


export default function AppContainer(props) {
  return (
    <div className = 'app-container'>
      {props.children}
    </div>
  )
}
