import React, { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

	const [ content, setContent ] = useState([]);

	useEffect(() => {
		fetchContent()
	}, [])

	const fetchContent = async () => {
		const response = await fetch('http://localhost:5000/content')
		const content = await response.json()
		setContent(content)
		}

	const handleDelete = async (id) => {
		if( window.confirm('Are you sure you want to delete this item?') ) {
		await fetch(`http://localhost:5000/content/${id}`, { method: 'DELETE' })
		setContent(content.filter(content => content.id !== id))
		}
	}

	const handleAdd = async (newContent) => {
    // console.log(1234) suveikia 
    // console.log(newContent, 'this is content')
    // console.log(typeof newContent, 'typeof newContent ')
  // console.log(newContent, 'this is new Content ')

  const response = await fetch('http://localhost:5000/content', {
	  method: 'POST', 
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newContent)
	})

	const data = await response.json()

    // newContent.id = new Date().getTime().toString()
//creating new object with new id works, but we can create only id and add to the content array
    // const newContentObj = {
    //   id: content.id,
    //   type: content.type,
    //   note: content.note,
    //   content: conent.content,
    // }
	// console.log(newContent, 'this is new Content ')

    setContent([data, ...content])
  }
  
//   console.log(content, 'this is content updated ')


	return (
		<TodoContext.Provider value={{ 
			content, 
			handleAdd,
			handleDelete,
		}}>
			{ children }
		</TodoContext.Provider>
	)
}
// export { TodoContext, TodoProvider };

export default  TodoContext