import styled from 'styled-components';
// add image gradient border color:
/*
border-image-source: linear-gradient(
	180deg,
	rgba(102, 113, 209, 0.14) 0%,
	rgba(86, 96, 185, 0.14) 100%
);
*/

export const StyledRoot = styled.div`
	border: 4px solid blue;
	height: 540px;
	margin: auto auto;
	padding: 30px;
	width: 625px;
`;

export const StyledHorizontalDivider = styled.div`
	height: 6px;
	position: relative;
	width: 100%;
`;

export const StyledSVGWrapper = styled.button`
	background: none;
	border: none;
	bottom: -18px;
	left: calc(50% - 19px);
	outline: none;
	padding: 0;
	position: absolute;
`;