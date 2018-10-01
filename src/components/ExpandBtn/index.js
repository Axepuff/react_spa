import React from 'react'
import { PropTypes } from 'prop-types'
import './ExpandBtn.css'

ExpandBtn.propTypes = {
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  txt: PropTypes.string,
}

export default function ExpandBtn(props) {
  return (
    <button className="expand-btn" onClick={props.toggleOpen}>
      {props.isOpen ? `- ${props.txt} -` : `+ ${props.txt} +`}
    </button>
  )
}
