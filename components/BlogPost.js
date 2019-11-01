import { withRouter } from 'next/router';
import React from 'react';
import Head from './Head';

// export default withRouter(props => {
// 	const { meta, children, router } = props;
// 	// const published = format(parse(meta.publishedAt), 'MMMM Do, YYYY');
// 	// const current = blogposts.map(({ title }) => title).indexOf(meta.title);
// 	// const next = blogposts[current - 1];
// 	// const prev = blogposts[current + 1];

// 	console.log(`BlogPost page props`, props);
// 	console.log(`meta `, meta);
// 	return (
// 		<>
// 			<Head title={meta.title} description={meta.summary} image={meta.image}>
// 				{meta.published !== true && <meta name="robots" content="noindex" />}
// 			</Head>
// 			{meta.published !== true && <strong>THIS IS A DRAFT. PLEASE DO NOT SHARE.</strong>}
// 			<h2>{meta.title}</h2>
// 			{children}
// 		</>
// 	);
// });

function BlogPost({ path, meta, children }) {
	return (
		<>
			<Head title={meta.title} description={meta.summary} image={meta.image}>
				{meta.published !== true && <meta name="robots" content="noindex" />}
			</Head>
			{meta.published !== true && <strong>THIS IS A DRAFT. PLEASE DO NOT SHARE.</strong>}
			<h2>{meta.title}</h2>
			{children}
		</>
	);
}

export default withRouter(BlogPost);
