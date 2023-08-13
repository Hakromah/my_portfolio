import React from 'react';
import LineGradient from '../components/LineGradient';
import { ProjectsApi } from '../apifolder/ProjectsApi';
import { motion } from 'framer-motion';

// const container = {
// 	hidden: {},
// 	visible: {
// 		transition: { staggerChildren: 0.2 },
// 	},
// };

// const projectVariant = {
// 	hidden: { opacity: 0, scale: 0.8 },
// 	visible: { opacity: 1, scale: 1 },
// };

// const Project = () => {
// 	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
//      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

// 	return (
// 		<motion.div variants={projectVariant} className="relative">
// 			<div className={overlayStyles}>
// 				<p className="text-2xl font-playfair"></p>
// 				<p className="mt-7">
// 					Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
// 					Nulla porttitor accumsan tincidunt.
// 				</p>
// 			</div>
// 		</motion.div>
// 	);
// };

const Projects = () => {
	return (
		<section id="projects" className="pt-16 pb-48">
			{/* HEADINGS */}
			<motion.div
				className="md:w-2/4 mx-auto text-center pt-0"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: '0.5' }}
				transition={{ delay: 0.5, duration: 0.8 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl">
						<span className="text-red">PRO</span>JECTS
					</p>
					<div className="flex justify-center mt-5">
						<LineGradient width="1/3" />
					</div>
				</div>
				<p className="mt-10 mb-10 text-xl">
					These are some of the projects I have completed. Among them,
					there are individuals and team projects
				</p>
			</motion.div>

			{/* PROJECTS */}
			<div className="flex justify-center flex-wrap">
				<motion.div
					className="flex-col gap-6 sm:grid sm:grid-cols-3 sm:h-full"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: '0.5' }}
					transition={{ delay: 0.8, duration: 1.1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					{ProjectsApi.map((item, index) => (
						<div
							key={index}
							className="hover:ease-in-out hover:overflow-hidden
							flex justify-center items-center duration-500
							max-w-[400px] h-[350px] px-4  relative mb-6 pb-12"
						>
							<div
								className="absolute h-full w-full opacity-0 hover:opacity-90
								 transition duration-500 bg-purple-300 z-30 flex flex-col justify-start items-start
								 text-center p-12 text-deep-blue"
							>
								<h1 className="text-2xl font-playfair font-semibold">
									{item.ptitle}
								</h1>
								<h2
									className="flex justify-start border-2 rounded-md border-t-fuchsia-950
								mx-auto pb-4 text-deep-blue mt-6"
								>
									{item.describtion}
								</h2>
								<a
									href={item.btnText}
									target="_"
									className="self-center mt-1"
								>
									<button className="btn ">see project live</button>
								</a>
							</div>
							<img
								className="w-[100%] h-[100%] "
								src={item.projectImg}
								alt="project_images"
							/>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
