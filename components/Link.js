import NextLink from 'next/link';
import { Link as RebassLink } from 'rebass';

const Link = props => {
	return (
		<NextLink href={props.href}>
			<RebassLink {...props}>{props.children}</RebassLink>
		</NextLink>
	);
};

export default Link;
