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
	// const [ array, setArray] = useState([
	// 	{
	// 		type: '',
	// 		content: '',
	// 		note: ''
	// 	}
	// ])

// const handleChange = (e) => {
// 		if ( e.target.note === true ) {
// 				setArray(e.target.value)
// 			} else if (e.target.name === 'content' ) {
// 				array.content(e.target.value)
// 			} else { 
// 				array.note(e.target.value)
// 			}
// 			// if ( e.target.name === 'content' ) {
// 		// 		setContent(e.target.defaultValue)
// 		// 	}
// 		// 	if ( e.target.name === 'note' ) {
// 		// 		setNote(e.target.defaultValue)
// 		// 	}
// 		setArray(e.target.value)
// 		console.log(array, 'this is type ')
// }
const handleNote = (e) => {
	setNote(e.target.value)
}
const handleType = (e) => {
	setType(e.target.value)
}
const handleContent = (e) => {
	setContent(e.target.value)
}

// console.log(type)
// console.log(note);
// console.log(content);

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
				<button tipas='submit'> siust </button>
			</div>

		</FormWrapper>	
	</Card>
  )
}

export default Form

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