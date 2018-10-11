import React from 'react'
import { PropTypes } from 'prop-types'
import './ExpandBtn.css'


export default function ExpandBtn(props) {
  const { isOpen, txt, toggleOpen } = props
  return (
    <button type="button" className="expand-btn" onClick={toggleOpen}>
      {isOpen ? `- ${txt} -` : `+ ${txt} +`}
    </button>
  )
}

ExpandBtn.propTypes = {
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  txt: PropTypes.string,
}
