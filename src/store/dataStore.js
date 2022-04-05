import project1w400 from '../assets/img/project1-400x400.jpg'
import project2w400 from '../assets/img/project2-400x400.jpg'
import project3w400 from '../assets/img/project3-400x400.jpg'

const headerLinks = [
	{ text: 'home' },
	{ text: 'about' },
	{ text: 'services' },
	{ text: 'work' },
	{ text: 'articles' }
]

headerLinks.forEach(link => { link.href = '#' })

export { headerLinks }

const sections = [
	{
		order: 1,
		title: 'Specialists in modern construction',
		paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.'],
		cards: [
			{
				title: 'Buildings',
				icon: 'far fa-building',
				paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
				backCard: {
					title: 'Artfully Crafted',
					paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
				}
			},
			{
				title: 'Renovate',
				icon: 'fas fa-sync',
				paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
				backCard: {
					title: 'Freshly new',
					paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
				}
			},
			{
				title: 'Construct',
				icon: 'fas fa-home',
				paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
				backCard: {
					title: 'Perfect lines',
					paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
				}
			},
			{
				title: 'Exclusive',
				icon: 'fas fa-truck',
				paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
				backCard: {
					title: 'Planning',
					paragraph: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
				}
			}
		]
	},
	{
		order: 3,
		title: 'Explore recent work',
		paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'],
		cards: [
			{
				img: project1w400,
				title: 'Florida health facility',
				tag: 'Commercial'
			},
			{
				img: project2w400,
				title: 'Maine modernity',
				tag: 'Residential'
			},
			{
				img: project3w400,
				title: 'Exclusive urban living',
				tag: 'Commercial'
			}
		],
		button: 'View all projects'
	},
	{
		order: 4,
		title: 'Our core values',
		paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'],
		cards: [
			{
				icon: 'fas fa-home',
				iconColor: '#21a6b5',
				title: 'Great service',
				paragraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
			},
			{
				icon: 'far fa-sun',
				title: 'High standard',
				iconColor: '#517ad2',
				paragraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
			},
			{
				icon: 'fas fa-users',
				iconColor: '#fe813e',
				title: 'Professional team',
				paragraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
			},
			{
				icon: 'far fa-lightbulb',
				iconColor: '#84cb01',
				title: 'Creative solutions',
				paragraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
			}
		]
	}
]

export { sections }
