import { withRouter } from 'next/router';
import React from 'react';
import Link from '../components/Link';
import posts from '../posts';

export class Blog extends React.Component {
	static async getInitialProps({ query }) {
		return query ? { page: query.page } : {};
	}

	render() {
		return (
			<main>
				{posts.map(post => (
					<Link href={`${post.path}`}>
						<h1>{post.title}</h1>
					</Link>
				))}
			</main>
		);
	}
}

export default withRouter(Blog);

// const Blog = ({ router, page = 1 }) => {
// 	return (
// 		<main>
// 			{posts.map(post => (
// 				<Link href={`${post.path}`}>
// 					<h1>{post.title}</h1>
// 				</Link>
// 			))}
// 		</main>
// 	);
// };

// Blog.getInitialProps = async ({ query }) => {
// 	return query ? { page: query.page } : {};
// };

// export default withRouter(Blog);
