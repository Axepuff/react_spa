import React from 'react'
import './AppContainer.css'


export default function AppContainer(props) {
  return (
    <div className = 'AppContainer'>
      {props.children}
    </div>
  )
}
