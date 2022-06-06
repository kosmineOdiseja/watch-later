import React, { useContext } from 'react'
import ContentItem from './ContentItem'
import TodoContext from './context/TodoContext'

const ContentList = () => {

	const { content } = useContext(TodoContext)

	if( !content || content.length === 0 ) {
		return (
			<div>
				<h2> There is no content yet </h2>
			</div>
		)} 

	// const { content } = useContext(TodoContext)
	return (
		<div>
			{content.map((item ) => {
				return (
					<ContentItem
						key={item.id}
						item={item}
					/>
			)})}
		</div>
	)
}

export default ContentList