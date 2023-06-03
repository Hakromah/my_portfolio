import React from 'react';
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import skillsimag from '../assets/reactimg.jpg';

const MySkills = () => {
	const isAboveMediumScreens = useMediaQuery('(nim-width: 1060px)');

	return (
		<section id="skills" className="pt-2 pb-24">
			{/* HEADER AND IMAGE SECTION */}
			<div className="md:flex md:justify-between md:gap-16 mt-32">
				<motion.div
					className="md:w-1/3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: '0.5' }}
					transition={{ delay: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="font-playfair font-semibold text-4xl mb-5">
						MY <span className="text-red">SKILLS</span>
					</p>
					<LineGradient width="1/3" />
					<p className="mt-10 mb-7">
						I am familiar with the following languages, frameworks and
						more. Hardworking and passionate job seeker with strong
						organizational skills eager to secure entry-level Front End
						Developer position. Ready to help team achieve company goals.
					</p>
				</motion.div>

				<div className="mt-16 md:mt-0">
					{isAboveMediumScreens ? (
						<div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
							<img
								className="z-10 max-w-[600px] h-[250px] animate-pulse"
								src={skillsimag}
								alt="skillis_image"
							/>
						</div>
					) : (
						<div className="flex justify-center px-6 items-center">
							<img
								className="z-10 max-w-[350px] h-[250px] px-6 animate-pulse"
								src={skillsimag}
								alt="skillis_image"
							/>
						</div>
					)}
				</div>
			</div>

			{/* Skills */}
			<div className="md:flex justify-between gap-25">
				{/* EXPERIENCE */}
				<motion.div
					className="md:w-1/3 mt-10 px-6 "
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					variants={{
						hidden: { opacity: 0, y: -100 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative">
						<div className="second_bg mx-auto bg-gradient-rainblue">
							<p className="font-playfair font-semibold text-3xl mt-3 px-6 pt-4">
								Familiar with
							</p>
							<p className="mt-3 justify-center text-2xl px-6 pb-8">
								Javascript, React.js, Typescript, Next.js
							</p>
						</div>
					</div>
				</motion.div>

				{/* INNOVATIVE */}
				<motion.div
					className="md:w-1/3 mt-10 px-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative">
						<div className="second_bg mx-auto bg-gradient-rainblue">
							<p className="font-playfair font-semibold text-3xl mt-3 px-6 pt-4">
								Some Front-End Technologies
							</p>
							<p className="mt-2 px-6 min-h-[90px] text-xl pb-6">
								HTML, CSS, SASS, Tailwind, Bootstrap, nmp
							</p>
						</div>
					</div>
				</motion.div>

				{/* IMAGINATIVE */}
				<motion.div
					className="md:w-1/3 mt-10 px-6 pt-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.7, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative">
						<div className="flex flex-col justify-center items-center second_bg z-10 mx-auto bg-gradient-rainblue">
							<p className="font-playfair font-semibold text-3xl mt-3 px-6">
								Backend Features
							</p>
							<p className="mt-5 px-6 h-[130px] text-2xl">
								Node.js(Express), Firebase
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default MySkills;
