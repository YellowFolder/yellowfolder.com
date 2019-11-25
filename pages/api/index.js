export default (req, res) => {
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.statusCode = 200;
	res.end(JSON.stringify({ name: 'YellowFolder' }));
};
