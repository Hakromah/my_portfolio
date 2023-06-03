import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { Close, Menu } from '@mui/icons-material';
import { Link } from 'react-scroll';

const NavLink = ({ page, selectedPage, setSelectedPage, toggleOff }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<Link
			offset={-92}
			spy={true}
			smooth={true}
			duration={1000}
			className={`${
				selectedPage === lowerCasePage ? 'text-yellow-400' : ''
			} hover:text-yellow-300 transition duration-500`}
			to={`${lowerCasePage}`}
			onClick={() => {
				toggleOff();
				setSelectedPage(lowerCasePage);
			}}
		>
			<span
				className="cursor-pointer text-xl shadow-md hover:border-b-4
			hover:border-orange-500 hover:rounded-md"
			>
				{page}
			</span>
		</Link>
	);
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery('(min-width: 769px)');

	const toggleOff = () => {
		setIsMenuToggled(false);
	};

	const navbarBackground = isTopOfPage ? '' : 'mainbg';
	const logoColor = isTopOfPage ? 'logoColor2' : 'logoColor';

	return (
		<nav
			className={`${navbarBackground} z-40 w-full fixed top-0 py-6 cursor`}
		>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className={`${logoColor} logo text-2xl md:text-4xl font-bold`}>
					HSK.Dev
				</h4>

				{/* Desktop NAV*/}
				{isAboveSmallScreens ? (
					<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
						<NavLink
							style={{ cursor: 'pointer' }}
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							toggleOff={toggleOff}
						/>
						<NavLink
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							toggleOff={toggleOff}
						/>
						<NavLink
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							toggleOff={toggleOff}
						/>
						<NavLink
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							toggleOff={toggleOff}
						/>
					</div>
				) : (
					<button
						onClick={() => setIsMenuToggled(!isMenuToggled)}
						className="rounded-full bg-red p-2 cursor-pointer animate-pulse"
					>
						<Menu className="text-white font-[50px]" />
					</button>
				)}

				{/* MOBILE MENU POPUP */}
				{isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-lime-500 w-[300px]">
						{/* CLOSE ICON */}
						<div className="flex justify-end p-12">
							<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
								<Close />
							</button>
						</div>
						{/* MENU ITEMS */}
						<div className="flex justify-center items-center flex-col gap-10 text-2xl text-deep-blue">
							<NavLink
								className="cursor-pointer"
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								toggleOff={toggleOff}
							/>
							<NavLink
								className="cursor-pointer"
								page="Skills"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								toggleOff={toggleOff}
							/>
							<NavLink
								className="cursor-pointer"
								page="Projects"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								toggleOff={toggleOff}
							/>
							<NavLink
								className="cursor-pointer"
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								toggleOff={toggleOff}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
