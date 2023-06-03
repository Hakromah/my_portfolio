import React from 'react';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {

	return (
		<footer className="mainbg h-64 p-10 bg-gradient-to-br from-blue-500 via-red-300 via-grey-300 to-black-700">
			<div className="w-5/6 mx-auto">
				<SocialMediaIcons />
				<div className="md:flex justify-center md:justify-between items-center">
					<p className="font-playfair font-semibold text-2xl text-yellow">
						Hassan Kromah
					</p>
					<p className="font-playfair text-md text-yellow">
						&copy; 2023 KROMAH. All Right Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
