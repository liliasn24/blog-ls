import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [blogs, setBlogs] = useState([]);
	const [singleBlog, setBlog] = useState({
		title: '',
		body: ''
	});

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

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/blogs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(singleBlog)
			});
			const data = await response.json();
			setBlogs([...blogs, data]);
			setBlog({
				title: '',
				body: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setBlog({ ...singleBlog, [e.target.id]: e.target.value });
	};
	return (
		<div className="HomePage">
			<h1>List of Blogs</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<label>Add New Blog Title</label>
					<input
						type="text"
						id="title"
						value={singleBlog.title}
						onChange={handleChange}
					/>
					<label>Add New Blog Text</label>
					<input
						type="text"
						id="body"
						value={singleBlog.body}
						onChange={handleChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
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
