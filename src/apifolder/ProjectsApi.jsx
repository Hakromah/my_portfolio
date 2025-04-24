import project1 from '../assets/project-1.jpg';
import project2 from '../assets/e-commerce.jpg';
import project3 from '../assets/construction.jpg';
import project4 from '../assets/booklist.jpg';
import project5 from '../assets/full-stack-ecommerce.jpg';
import project6 from '../assets/project-6.png';

export const ProjectsApi = [
	{
		projectImg: project6,
		ptitle: 'PROJECT MANAGEMENT SYSTEM',
		describtion:
			'This is a JAVA & SPRING BOOT project I built with vite and tailwindcss, You can sign up and log in, Create projects and add tasks, invite team members, and assign tasks to them. Also, you can add comments to the tasks. There is also a chat section. ',
		btnText: 'https://pmsystem-react.vercel.app/',
	},
	{
		projectImg: project1,
		ptitle: 'PANCAKE SWAP',
		describtion:
			'Is a team project we built together by using Github to push and merge our responsiple components. ',
		btnText: 'https://pancakeswap-nine.vercel.app/',
	},

	{
		projectImg: project2,
		ptitle: 'FOOD ORDERING APP',
		describtion:
			'I built this project with Next.js, and MongoDB is used for data management, Paypal payment method is applied, you can add the item to the cart and check it out',
		btnText: 'https://github.com/Hakromah/doner_app',
		//btnText: 'https://next-project-phi-five.vercel.app/',
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
			'In this project I used react hooks (useState, useContext, and useReducer). You can add and delete, the total quantity will update.',
		btnText: 'https://react-context-todo-ten.vercel.app/',
	},
	{
		projectImg: project5,
		ptitle: 'FULL STACK E-COMMERCE',
		describtion:
			'I built this full stack e-commerce app with Strapi for backend data management, and Strape for payment method. Many technologies were used... ',
		btnText: 'https://shoes-frontend-gr1j.vercel.app/',
	},
];
