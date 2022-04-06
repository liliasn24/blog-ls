import { response } from 'express';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [blogs, setBlogs] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/blogs/${props.match.params.id}`), {
				method: 'PUT',
				headers: {
					Content-Type: 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					body: bodyInput.current.value
				})
			})
			const data = await response.json()
			setBlogs(data)
		} catch (error) {
			console.error(error);
		}
	};

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
							<Link to={`/${blog._id}`}>
								<h3>{blog.title}</h3>
							</Link>
							<p>{blog.body}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
