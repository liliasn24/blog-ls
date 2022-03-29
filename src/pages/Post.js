import React, { useEffect, useState } from 'react';

export default function Show(props) {
	const [blog, setBlog] = useState({});

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

	return (
		<div className="ShowPage">
			{Object.keys(blog).length ? (
				<>
					<h3>{blog.title}</h3>
					<p>{blog.body}</p>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
