import React from "react";

const Image = ({ imgSrc, altText, className, ...props }) => {
	return <img src={imgSrc} alt={altText} className = {className ? className : ""} {...props} />;
};

export default Image;
