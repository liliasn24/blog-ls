import React, { useEffect, useState } from 'react';

export default function Home(props) {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/blogs');
				const data = await response.json();
				setBlogs(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="HomePage">
			<ul>
				{blogs.map(blog => {
					return (
						<li key={blog._id}>
							<h3>{blog.title}</h3>
							<p>{blog.body}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
