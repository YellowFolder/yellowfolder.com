import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

export default withRouter(({ title, description, image, router, children }) => {
	<Head>
		{title != 'undefined' && <title key="title">{title}</title>}
		{description != 'undefined' && (
			<meta name="description" key="description" content={description} />
		)}
		{children}
	</Head>;
});
