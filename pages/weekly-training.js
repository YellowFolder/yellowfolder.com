import styled from 'styled-components';

const ContentContainer = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	display: flex;
	height: 100%;
	padding: ${props => props.padding || 0};
`;

const TrainingPage = () => {
	return (
		<ContentContainer>
			<article>
				<h1>We&rsquo;ll be back soon!</h1>
				<div>
					<p>
						Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment.
						If you need to you can always <a href="mailto:support@yellowfolder.com">contact us</a>,
						otherwise we&rsquo;ll be back online shortly!
					</p>
					<p>&mdash; YellowFolder</p>
				</div>
			</article>
		</ContentContainer>
	);
};

export default TrainingPage;
