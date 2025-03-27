import React from 'react';
import styled from 'styled-components';

const StyledIframeWrapper = styled.div`
	width: 100%;
	height: 100vh;
	padding: 20px;
`;

const Calculator = () => (
	<StyledIframeWrapper>
		<iframe
			src="https://calculator.yellowfolder.com/"
			width="100%"
			height="100%"
			style={{ border: 'none' }}
			title="Calculator"
		/>
	</StyledIframeWrapper>
);

export default Calculator;
