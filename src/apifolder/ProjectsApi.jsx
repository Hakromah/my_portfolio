import project1 from '../assets/project-1.jpg';
import project2 from '../assets/e-commerce.jpg';
import project3 from '../assets/construction.jpg';
import project4 from '../assets/booklist.jpg';

export const ProjectsApi = [
	{
		projectImg: project1,
		ptitle: 'PANCAKE SWAP',
		describtion:
			'Is a team project we built together by using Github to push and merge our responsiple components. ',
		btnText: 'https://leafy-we-build.netlify.app/',
	},

	{
		projectImg: project2,
		ptitle: 'E-COMMERCE',
		describtion:
			"Using anything new can be a bit of a challenge. Don't worry though, we've created a range of guides to help you get comfortable with PancakeSwap!",
		btnText: 'https://next-project-phi-five.vercel.app/',
	},

	{
		projectImg: project3,
		ptitle: 'CONSTRUCTION PROJECT',
		describtion:
			'This is a construction project I and my friend built it with React and SASS',
		btnText: 'https://leafy-we-build.netlify.app/',
	},
	{
		projectImg: project4,
		ptitle: 'REACT HOOKS TODO LIST',
		describtion:
			'In this project I used react hooks (useState, useContext, and useReducer). You can add and delete, 				the total quantity will update, the book will also remain on the page on refresh.',
		btnText: 'https://react-context-todo-ten.vercel.app/',
	},
];
