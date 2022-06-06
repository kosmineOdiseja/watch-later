import styled from 'styled-components'
import React from 'react'

const Card = ({ children }) => {
  return (
	<CardFrame>{children}</CardFrame>
  )
}

export default Card

const CardFrame = styled.div`
	margin: 1rem auto;
	padding: 1rem 3rem;
	  background: #c9c3e7;
	  border-radius: 5px;
	  box-shadow: 0 0 10px rgba(0,0,0,0.5);
	  width: 80vw;
	  min-height: 20vh;
	  position: relative;
`
