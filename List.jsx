import React from 'react';//list component//

export default function App() {
	const posts = [
	  { id: 1, title: "Mark"},
	  { id: 2, title: "James" },
	  { id: 3, title: "Steve" }
	];
  
	return (
	  <div>
		  <ul>
			{React.Children.toArray(
				posts.map(( post ) => <li>{post.title}</li>)
			)}
		  </ul>
	  </div>
	);
  }