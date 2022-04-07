import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<div class="social">
				<p>Send me an email</p>
				<a class="social" href="mailto: salaslilia00@gmail.com">
					<i class="far fa-envelope-open click"></i>
				</a>
			</div>

			<div class="social">
				<p>Check out my projects on Github</p>
				<a href="https://github.com/liliasn24" target="_blank">
					<i class="fab fa-github click"></i>
				</a>
			</div>

			<div class="social">
				<p>Add me on linkedin</p>
				<a href="https://www.linkedin.com/in/lilia-salas/" target="_blank">
					<i class="fab fa-linkedin click"></i>
				</a>
			</div>
		</div>
	);
}
