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
		<div className="jumbotron">
			<div>
				{Object.keys(blog).length ? (
					<>
						<h3 className="text-center">{blog.title}</h3>
						<p className="text-center mt-5 mb-5">{blog.body}</p>
					</>
				) : (
					<h1>Loading...</h1>
				)}
			</div>

			<div className="container">
				<form
					// style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleUpdate}
				>
					<div className="form-group">
						<label>
							{' '}
							Title:{' '}
							<input
								className="form-control"
								type="text"
								ref={titleInput}
								defaultValue={blog.title}
							/>
						</label>
					</div>
					<div className="form-group">
						<label>
							{' '}
							Body:{' '}
							<textarea
								className="form-control"
								type="text"
								ref={bodyInput}
								defaultValue={blog.body}
							/>
						</label>
						<input
							className="form-control btn btn-success"
							type="submit"
							value="Update MicroBlog"
						/>
						<button
							type="button"
							className="btn btn-danger"
							onClick={handleDelete}
						>
							Delete Me
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
