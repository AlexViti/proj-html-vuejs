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
	<columns-section :section="sections[1]">
		<resize-observer @notify="handleResize" />
		<slot>
			<image-card v-for="card in sections[1].cards" :key="card.title" :card="card" />
		</slot>
	</columns-section>
</main>
</template>

<script>
import BannerMain from './sections/BannerMain.vue'
import FlippingCard from './sections/cards/FlippingCard.vue'
import ColumnsSection from './sections/ColumnsSection.vue'
import HeroMain from './sections/HeroMain.vue'
import LinkButton from './utility/LinkButton.vue'
import { sections } from '../store/dataStore.js'
import ImageCard from './sections/cards/ImageCard.vue'

export default {
	components: { HeroMain, LinkButton, ColumnsSection, FlippingCard, BannerMain, ImageCard },
	name: 'MainAvada',
	methods: {
		handleResize({ width }) {
			this.windowWidth = width
		}
	},
	data: () => ({
		windowWidth: 0,
		sections
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
