import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  grid-area: dat;
  padding-right: 1rem;
`

const DateBlock = styled.div`

`

const Dates = (props) => {
  const { pointDate } = props
  const fromDate = new Date(pointDate.from)
  const toDate = new Date(pointDate.to)
  const addNull = num => (num.toString().length < 2 ? `0${num}` : num)
  return (
    <Wrapper>
      <DateBlock>
        {pointDate.from ? `${addNull(fromDate.getDate())}.${fromDate.getMonth()}` : 'нет даты'}
      </DateBlock>
      <DateBlock>
        {pointDate.to ? `${addNull(toDate.getDate())}.${toDate.getMonth()}` : 'нет даты'}
      </DateBlock>
    </Wrapper>

  )
}

Dates.propTypes = {
  pointDate: PropTypes.object,
}

export default Dates
