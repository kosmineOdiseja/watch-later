import React from 'react'
import styled from 'styled-components'

const Button = ({tipas, children}) => {
	// console.log(typeof tipas, 'this is tipas ')
  return (
	<ButtonFrame type={tipas}>
		{children}
	</ButtonFrame>
  )
}

export default Button 

const ButtonFrame = styled.div`
	  margin: 2rem;
	  background: #796d79;
	  border-radius: 5px;
	  width: 15vw;
	  height: 4vh;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  text-transform: uppercase;
	  font-size: 1.2rem;
	  font-weight: 400;
	  color: white;
	  cursor: pointer;
	  &:hover {
		  background: #8e44ad;
	  }
	  /* box-shadow: 0 0 10px rgba(0,0,0,0.5); */
`