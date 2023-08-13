import SocialMediaIcons from '../components/SocialMediaIcons';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import profile from '../assets/profile_image.png';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<section
			id="home"
			className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 mt-10"
		>
			<motion.div
				initial={{ opacity: 1 }}
				animate={{ opacity: 0 }}
				transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
			>
				<span className="block absolute w-full h-full top-0 left-0 bg-gray-500"></span>
			</motion.div>

			{/* IMAGE SECTION */}
			<div className=" md:order-2 flex md:justify-end justify-center basis-3/5 z-10 mt-16 md:mt-32 md:mr-8">
				{isAboveMediumScreens ? (
					<div
						className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-10
					 before:rounded-t-[400px] before:w-full before:max-w-[350px] before:h-full
					 before:border-[1px] before:border-blue-300 before:z-[-1]"
					>
						<div
							className="absolute top-0 -left-[10%] w-52 h-52 bg-purple-500 rounded-full mix-blend-multiply
					filter blur-xl opacity-70 z-[-2] animate-blob"
						></div>
						<div
							className="absolute bottom-72 left-8 w-52 h-52 bg-pink-500 rounded-full mix-blend-multiply
					filter blur-xl opacity-70 z-[-2] animate-blob animation-delay-2000"
						></div>
						<div
							className="absolute top-0 left-28 w-52 h-52 bg-yellow-500 rounded-full mix-blend-multiply
					filter blur-xl opacity-70 z-[-2] animate-blob animation-delay-4000"
						></div>
						<div
							className="relative z-0 ml-20 before:absolute before:-top-6
					 before:rounded-t-[400px] before:w-full before:max-w-[336px] before:h-full
					 before:border-[1px] before:border-blue-300 before:z-[-1] before:bg-blue-200"
						>
							<img
								className="hover:saturate-200 transition duration-500 z-50
							w-[340px] h-[400px] md:max-w-[400px] md:mb-8 rounded-lg"
								src={profile}
								alt="profile_image"
							/>
						</div>
					</div>
				) : (
					<div
						className="relative z-0 before:absolute before:-top-6
					 before:rounded-t-[400px] before:w-full before:max-w-[336px] before:h-full
					 before:border-[1px] before:border-blue-300 before:z-[-1] before:bg-blue-200"
					>
						<img
							className="hover:saturate-200 transition duration-500 z-50
							w-[340px] h-[400px] md:max-w-[400px] md:mb-8 rounded-lg"
							src={profile}
							alt="profile_image"
						/>
					</div>
				)}
			</div>
			{/* MAIN section */}
			<div className="z-30 basis-2/5 mt-12 md:mt-32">
				{/* HEADINGS */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: '0.5' }}
					transition={{ duration: 0.9 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="text-3xl md:text-4xl font-playfair z-10 text-center md:text-start mb-6">
						Hi, my name's{' '}
						<span
							className="xs:relative xs:text-blue-400 xs:font-semibold z-20
								before:absolute before:-left-[25px]
								before:-top-[30px] before:z-[-1] xs:before:flex items-center"
						>
							Hassan
						</span>
					</p>
					<p className="text-2xl md:text-3xl font-playfair font-semibold mb-5">
						I'm a{' '}
						<span className="text-xl md:text-2xl text-green-300">
							FRONT-END DEVELOPER
						</span>
					</p>
				</motion.div>

				{/* CALL TO ACTION */}
				<motion.div
					className="flex mt-12 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: '0.5' }}
					transition={{ delay: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<AnchorLink
						className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
						hover:bg-blue hover:text-white transition duration-500"
						onClick={() => setSelectedPage('contact')}
						href="#contact"
					>
						Contact Me
					</AnchorLink>
					<AnchorLink
						className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 relative"
						onClick={() => setSelectedPage('contact')}
						href="#contact"
					>
						<div
							className="bg-deep-blue second_bg hover:text-red-300
							transition duration-500 w-full h-full flex items-center
								justify-center font-playfair px-10"
						>
							We can talk.
						</div>
					</AnchorLink>
				</motion.div>

				{/* Social Medials */}
				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: '0.5' }}
					transition={{ delay: 0.7 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	);
};

export default Landing;
