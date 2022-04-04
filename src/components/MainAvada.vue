<template>
	<!-- Main with a lot of sections -->
<main>
	<hero-main />
	<div class="container-primary">
		<h2>Do You Have A Construction Project We Can Help With?</h2>
		<link-button :border="true" :color="'secondary'" />
	</div>
	<columns-section :section="sections[0]" :key="windowWidth">
		<resize-observer @notify="handleResize" />
		<slot>
			<flipping-card v-for="card in sections[0].cards" :key="card.title" :card="card" />
		</slot>
	</columns-section>
	<banner-main />
</main>
</template>

<script>
import BannerMain from './BannerMain.vue'
import FlippingCard from './FlippingCard.vue'
import ColumnsSection from './sections/ColumnsSection.vue'
import HeroMain from './sections/HeroMain.vue'
import LinkButton from './utility/LinkButton.vue'

export default {
	components: { HeroMain, LinkButton, ColumnsSection, FlippingCard, BannerMain },
	name: 'MainAvada',
	methods: {
		handleResize({ width }) {
			this.windowWidth = width
		}
	},
	data: () => ({
		windowWidth: 0,
		sections: [
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
			}
		]
	})
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables'

.container-primary
	background-color: $brightSunVib
	text-align: center

	h2
		font-size: 32px
		font-weight: 400
		padding: 3rem 0 1rem

	a
		transform: translateY(50%)
</style>
