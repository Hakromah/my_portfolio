import {
	FacebookOutlined,
	GitHub,
	Instagram,
	LinkedIn,
	Twitter,
} from '@mui/icons-material';
import React from 'react';

const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center md:justify-start my-10 gap-7">
			<a
				className=" hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/hassan-s-kromah-95021b102/"
				target="_blank"
				rel="noreferrer"
			>
				<LinkedIn />
			</a>

			<a
				className=" hover:opacity-50 transition duration-500"
				href="https://github.com/Hakromah?tab=repositories"
				target="_blank"
				rel="noreferrer"
			>
				<GitHub />
			</a>
			<a
				className=" hover:opacity-50 transition duration-500"
				href="https://www.facebook.com"
				target="_blank"
				rel="noreferrer"
			>
				<FacebookOutlined />
			</a>
			<a
				className=" hover:opacity-50 transition duration-500"
				href="https://z-p15.www.instagram.com/hs_kromah/"
				target="_blank"
				rel="noreferrer"
			>
				<Instagram />
			</a>
			<a
				className=" hover:opacity-50 transition duration-500"
				href="https://twitter.com/hakromah"
				target="_blank"
				rel="noreferrer"
			>
				<Twitter />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
