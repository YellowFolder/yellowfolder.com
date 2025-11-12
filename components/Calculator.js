import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.div`
	width: 100%;
	height: calc(100vh - 155px);
	display: flex;
	flex-direction: column;
`;

const InstructionsSection = styled.div`
	padding: 15px 30px;
	text-align: center;
	background: #f9f9f9;

	h2 {
		color: ${props => props.theme.grey};
		font-family: ${props => props.theme.boldFont};
		font-size: 2.4rem;
		margin: 0 0 8px 0;
	}

	p {
		color: ${props => props.theme.grey};
		font-size: 1.4rem;
		line-height: 1.5;
		margin: 0;
		max-width: 1200px;
		margin: 0 auto;
	}
`;

const StyledIframeWrapper = styled.div`
	width: 100%;
	flex: 1;
	max-height: 850px;
`;

const Calculator = () => (
	<PricingContainer>
		<InstructionsSection>
			<h2>Estimate Your Pricing</h2>
			<p>
				Use the calculator below to estimate your YellowFolder pricing. Select
				the record series you need (Student, Special Education, Employee, or
				Administrative), enter your district's student population, and instantly
				see your costs. The Cost Summary shows a one-time Setup fee, plus your
				subscription cost displayed as both Monthly and Annual rates (choose the
				billing cycle that works best for your district).
			</p>
		</InstructionsSection>
		<StyledIframeWrapper>
			<iframe
				src="https://calculator.yellowfolder.com/"
				width="100%"
				height="100%"
				style={{ border: 'none' }}
				title="YellowFolder Pricing Calculator"
			/>
		</StyledIframeWrapper>
	</PricingContainer>
);

export default Calculator;
