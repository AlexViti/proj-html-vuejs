import project1 from '../assets/img/project1.jpg'
import project2 from '../assets/img/project2.jpg'
import project3 from '../assets/img/project3.jpg'

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
		title: 'Specialists In Modern Construction',
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
		title: 'Explore Recent Work',
		paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'],
		cards: [
			{
				img: project1,
				title: 'Florida health facility',
				tag: 'Commercial'
			},
			{
				img: project2,
				title: 'Maine modernity',
				tag: 'Residential'
			},
			{
				img: project3,
				title: 'Exclusive urban living',
				tag: 'Commercial'
			}
		]
	}
]

export { sections }
