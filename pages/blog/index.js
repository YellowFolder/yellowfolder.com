import React, { Component } from 'react';
import posts from '../../posts/blog-posts';

class BlogIndex extends Component {
	render() {
		return (
			<main>
				{posts.map(post => (
					<h1>{post.title}</h1>
				))}
			</main>
		);
	}
}

export default BlogIndex;
