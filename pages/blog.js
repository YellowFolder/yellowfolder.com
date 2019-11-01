import { withRouter } from 'next/router';
import React from 'react';
import Link from '../components/Link';
import posts from '../posts';

const BlogIndex = ({ router, page = 1 }) => {
	return (
		<main>
			{posts.map(post => (
				<Link href={`${post.path}`}>
					<h1>{post.title}</h1>
				</Link>
			))}
		</main>
	);
};

BlogIndex.getInitialProps = async ({ query }) => {
	return query ? { page: query.page } : {};
};

export default withRouter(BlogIndex);
