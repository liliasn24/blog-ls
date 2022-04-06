import React, { useEffect, useState, useRef } from 'react';

export default function Show(props) {
	const [blog, setBlog] = useState({});
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/blogs/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					body: bodyInput.current.value
				})
			});
			const data = await response.json();
			setBlog(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/blogs/${props.match.params.id}`);
				const data = await response.json();
				setBlog(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/blogs/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedBlog = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="HomePage">
			{Object.keys(blog).length ? (
				<>
					<h3>{blog.title}</h3>
					<p>{blog.body}</p>
					<button onClick={handleDelete}>Delete Me</button>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
