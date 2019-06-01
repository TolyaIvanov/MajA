import React from 'react';

const IconAdd = ({
	                 fill = "#000",
	                 width = "100%",
	                 className = "icon",
	                 viewBox = "0 0 60 60"
                 }) => (
	<svg
		width={width}
		height={width}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
		className={`svg-icon ${className || ""}`}
		xmlnsXlink="http://www.w3.org/1999/xlink"
		x="0px" y="0px"
		id="Capa_1"
		xmlSpace={"preserve"}
	>
		<g>
			<path d="M0,0v60h60V0H0z M58,58H2V2h56V58z"/>
			<polygon points="29,51 31,51 31,31 51,31 51,29 31,29 31,9 29,9 29,29 9,29 9,31 29,31"/>
		</g>
	</svg>
);

export default IconAdd;

