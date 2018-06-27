import React from "react"
import './ExpandBtn.css'

export default function ExpandBtn(props) {
  return (
    <button className = 'expand-btn' onClick = {props.toggleOpen}>
      {props.isOpen ? `- ${props.txt} -` : `+ ${props.txt} +`}
    </button>
  )
}