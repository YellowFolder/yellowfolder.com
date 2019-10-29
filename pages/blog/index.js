import React from 'react';
import fetch from 'isomorphic-unfetch';
import { parse, format } from 'date-fns';

class BlogIndex extends React.Component {
	static async getInitialProps() {
		const data = await fetch('https://yellowfolder');
	}
}
