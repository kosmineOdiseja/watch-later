import React, { useState, useContext } from 'react'
import TodoContext from './context/TodoContext'
import Button from './shared/Button'
import Card from './shared/Card'
import styled from 'styled-components'

const Form = () => {

	const [ type, setType ] = useState('')
	const [ content, setContent] = useState('')
	const [ note, setNote ] = useState('')
	
	const { handleAdd } = useContext(TodoContext)

const handleNote = (e) => {
	setNote(e.target.value)
}
const handleType = (e) => {
	setType(e.target.value)
}
const handleContent = (e) => {
	setContent(e.target.value)
}



const handleSubmit = (e) => {
	e.preventDefault()
	const newItem = {
		type, 
		content, 
		note,
	}
	handleAdd(newItem)
	setNote('')
	setType('')
	setContent('')
}
  return (
	  <Card>
		<FormWrapper onSubmit={handleSubmit}>
		<h2> Pridėti Watch Later </h2>
			<div> 
				<Input

					onChange={handleType}
					type='text'
					placeholder={' type '}
					// value types doen't work now because its setting the value to the type and doesn't write the text in the input field.
					value={type}
				/>
			</div>
			<div> 
				<Input
					onChange={handleNote}
					type={'text'}
					placeholder={'Note'}
					value={note}
				/>
			</div>
			<div> 
				<Input
					onChange={handleContent}
					type={'text'}
					placeholder={' Content '}
					value={content}
				/>
			</div>
			<div>
				{/* <Button type='submit' />  */}
				<ButtonSend tipas='submit'> siųsti </ButtonSend>
			</div>

		</FormWrapper>	
	</Card>
  )
}

export default Form
const ButtonSend = styled.button`
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
`

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Input = styled.input`
	width: 80vw;
	padding: 1rem;
	margin: 0.25rem 0;
	border: none;
	border-radius: 0.25rem;
	font-size: 1.2rem;
	font-weight: 400;
	background-color: #f5f5f5;
	&:focus {
		outline: none;
	}
`