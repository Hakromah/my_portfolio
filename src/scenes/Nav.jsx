import React, { useState } from 'react';
import { Link } from 'react-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const NavLink = ({ page, close, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();

	return (
		<Link
			offset={-100}
			spy={true}
			smooth={true}
			duration={500}
			className={`${selectedPage === lowerCasePage ? 'text-[#ffd700]' : ''}
        hover:text-[#ffd700] transition duration-500`}
			to={`${lowerCasePage}`}
			onClick={() => {
				close();
				setSelectedPage(lowerCasePage);
			}}
		>
			{page}
		</Link>
	);
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const closeTap = () => {
		setIsMenuToggled(false);
	};
	const isAboveMediumScreens = useMediaQuery('(min-width:769px)');
	const navbarbg = isTopOfPage ? '' : 'bg-image';
	const navb = isTopOfPage ? 'text-[#8d8d8d]' : 'text-[#444]';

	return (
		<nav
			className={` ${navbarbg} navbar max-w-[1500px] z-40 w-[100%] fixed top-0 h-[70px] flex items-center justify-center`}
		>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4
					className={` ${navb} font-serif cursor-pointer md:text-3xl font-bold`}
				>
					portfolio
				</h4>

				{/* DESKTOP NAV */}
				{isAboveMediumScreens ? (
					<div className="flex justify-between gap-16 cursor-pointer font-opensans text-xl font-semibold">
						<NavLink
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							close={closeTap}
						/>
						<NavLink
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							close={closeTap}
						/>
						<NavLink
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							close={closeTap}
						/>
						<NavLink
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							close={closeTap}
						/>
					</div>
				) : (
					<div
						className="block md:hidden  p-2"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<ion-icon
							name="menu-outline"
							size="large"
							className="h-20"
						></ion-icon>
					</div>
				)}

				{/* Mobile */}
				{isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-gray-400 w-[300px]">
						{/* close icon */}
						<div
							className="flex justify-end p-12 text-4xl"
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<ion-icon
								name="close-outline"
								size="large"
								className=""
							></ion-icon>
						</div>
						{/* menu items */}
						<div className="flex flex-col gap-16 ml-[33%] cursor-pointer text-2xl text-deep-blue">
							<NavLink
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								close={closeTap}
							/>
							<NavLink
								page="Skills"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								close={closeTap}
							/>
							<NavLink
								page="Projects"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								close={closeTap}
							/>
							<NavLink
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								close={closeTap}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
