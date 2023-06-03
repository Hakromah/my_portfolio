import React from 'react';
import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import contactImg from '../assets/contactimg.jpg';

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
		e.target.reset();
	};

	return (
		<section id="contact" className="py-48">
			{/* HEADINGS */}
			<motion.div
				className="flex justify-end w-full"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: '0.5' }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl">
						<span className="text-yellow">CONTACT EM</span> TO GET STARTED
					</p>
					<div className="flex md:justify-end mt-5">
						<LineGradient width="w-1/2" />
					</div>
				</div>
			</motion.div>

			{/* FORM & IMAGE */}
			<div className="md:flex md:justify-between gap-16 mt-5">
				<motion.div
					className="basis-1/2 flex justify-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: '0.5' }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<img src={contactImg} alt="contact_img" />
				</motion.div>

				<motion.div
					className="basis-1/2 mt-10 md:mt-0"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: '0.5' }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<form
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/87562abeddf3230716a9674e4f283977"
						method="POST"
					>
						<input
							className="w-full bg-indigo-300 font-semibold placeholder-opaque-black p-3 outline-red"
							type="text"
							placeholder="NAME"
							{...register('email', {
								required: true,
								maxLength: 100,
							})}
						/>
						{errors.email && (
							<p className="mt-1 text-red">
								{errors.email.type === 'required' &&
									'The filed is required.'}
								{errors.email.type === 'maxLength' &&
									'Max length is 100 char.'}
							</p>
						)}

						<input
							className="w-full bg-indigo-300 font-semibold placeholder-opaque-black p-3 mt-5 outline-red"
							type="email"
							placeholder="EMAIL"
							{...register('email', {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className="mt-1 text-red">
								{errors.email.type === 'required' &&
									'The filed is required.'}
								{errors.email.type === 'pattern' &&
									'Invalid email address.'}
							</p>
						)}

						<textarea
							className="w-full bg-indigo-300 font-semibold placeholder-opaque-black p-3 mt-5 outline-red transition duration-100"
							type="text"
							placeholder="MESSAGE"
							rows="4"
							cols="50"
							{...register('message', {
								required: true,
								maxLength: 2000,
							})}
						/>
						{errors.message && (
							<p className="mt-1 text-red">
								{errors.message.type === 'required' &&
									'The filed is required.'}
								{errors.message.type === 'maxLength' &&
									'Max length is 2000 char.'}
							</p>
						)}

						<button
							type="submit"
							className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 mt-5 font-semibold
						hover:bg-blue hover:text-white transition duration-500"
						>
							SEND ME A MESSAGE
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
