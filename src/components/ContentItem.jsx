import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import { FaBeer  } from 'react-icons/fa'
import  TodoContext from './context/TodoContext'

const ContentItem = ({ item }) => {

	const { handleDelete } = useContext(TodoContext)

  return (
	<Card key={item.id}>
		{/* <button  onClick={() => deleteContentItem(item.id)}> */}
		<button onClick={() => handleDelete(item.id)} > 
			<FaTimes color="purple" />
		</button>
		<button >
			<FaBeer color="purple" />
		</button>

		<Header> { item.content } </Header>
		<Note> { item.note } </Note>
		<Type> { item.type } </Type>
	</Card>
  )
}

export default ContentItem

const Header = styled.h3`
	width: 100%;
	  font-size: 1.5rem;
	  font-weight: 600;
	  margin: 0;
	  padding: 1rem;
`
const Note = styled.p`
	  font-size: 1.2rem;
	  width: 100%;
	  font-weight: 400;
	  margin: 0;
	  padding: 1rem;
`
const Type = styled.p`
		width: 100%;
	  font-size: 1.2rem;
	  font-weight: 400;
	  margin: 0;
	  padding: 1rem;
`