// import { response } from 'express'; (this code appears on its own and causes the fs module not found error)
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [blogs, setBlogs] = useState([]);
	const [singleBlog, setBlog] = useState({
		title: '',
		body: ''
	});

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/bookmarks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(singleBlog)
			});
			const data = await response.json();
			setBlogs([...bookmarks, data]);
			setBlog({
				title: '',
				body: ''
			});
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
