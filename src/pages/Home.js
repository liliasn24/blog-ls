// import { response } from 'express'; (this code appears on its own and causes the fs module not found error)
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
			<div class="jumbotron text-center">
				<h1 class="display-4">Welcome to my website</h1>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas
					ducimus officiis dolorum vitae odit accusantium praesentium neque
					minima velit quasi suscipit voluptates, iusto esse voluptatibus id
					dignissimos, adipisci illum deserunt beatae. Harum, officia beatae ex
					tempore cupiditate molestiae esse optio quidem id accusamus placeat.
					Quo nobis amet libero. Numquam optio quia, praesentium labore maxime
					deserunt illo quod, pariatur culpa sint consectetur beatae nobis
					sapiente sed omnis unde rem quae mollitia error possimus, natus
					provident voluptatem tempore? Blanditiis reprehenderit perferendis
					odit sed praesentium repellendus consequuntur. Voluptatibus quidem ex
					voluptatum explicabo ab deleniti! Pariatur fuga architecto enim,
					magnam blanditiis accusantium fugiat?
				</p>
			</div>

			<h1>List of Blogs</h1>
			<form action="/" method="get">
				<label htmlFor="header-search">
					<span className="visually-hidden">Search blog posts</span>
				</label>
				<input
					type="text"
					id="header-search"
					placeholder="Search blog posts"
					name="s"
				/>
				<button type="submit">Search</button>
			</form>
			<ul>
				{blogs.map(blog => {
					return (
						<li key={blog._id}>
							<Link to={`/${blog._id}`}>
								<h3>{blog.title}</h3>
								<p>{blog.createdAt}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
