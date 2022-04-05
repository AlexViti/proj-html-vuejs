<template>
<section>
	<div class="wrapper">
		<h2>Trusted partners</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
		<agile :slidesToShow="5" autoplay :dots="false" :navButtons="false">
			<img v-for="(logo, i) in logos" :key="i" :src="logo">
		</agile>
	</div>
</section>
</template>

<script>
import { logos } from '../../store/dataStore'
import { VueAgile } from 'vue-agile'

export default {
	name: 'CarouselPartners',
	components: { agile: VueAgile },
	data: () => ({
		logos
	}),
	computed: {
		partnersLogos() {
			return [...this.logos, ...this.logos]
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/mixins'
@import '../../assets/styles/partials/variables'

section
	text-align: center
	padding: 6rem 0
	display: flex
	flex-direction: column
	justify-content: center

	.wrapper
		width: clamp(600px, 70%, 1200px)
		margin: 0 auto

		h2
			@include headingBorderBottom

		p
			color: $cardTextColor
			width: 45%
			margin: 0 auto
			padding: 2rem
			line-height: 2.3em
			font-size: 15px

		img
			cursor: grab

</style>
