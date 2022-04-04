<template>
<!-- Hero section that takes all the available viewport height -->
<section id="hero">
	<div class="wrapper">
		<h1>Building inspiring spaces</h1>
		<p>We Build Inspiring Residential &amp; Commercial Spaces</p>
		<div class="btns">
			<link-button :color="'secondary'" :text="'Explore Recent Work'" />
			<link-button :color="'primary'" :text="'Get a quote today'" :getAQuote="true" />
		</div>
	</div>
</section>
</template>

<script>
import LinkButton from '../utility/LinkButton.vue'
export default {
	components: { LinkButton },
	name: 'HeroMain'
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/variables'
@import '../../assets/styles/partials/animations'

#hero
	margin-top: $headerHeight
	height: calc(100vh - $headerHeight)
	background: url('../../assets/img/home-hero.jpg') no-repeat center center
	background-size: cover

	display: grid
	place-content: center
	text-align: center

	.wrapper
		z-index: 0
		animation: appear 0.5s ease 1s 1 both

		h1
			color: white
			font-size: 60px
			font-weight: 800
			letter-spacing: 2px
			text-transform: uppercase

		p
			color: $brightSunVib
			font-size: 24px
			letter-spacing: 1px
			margin-top: .6em

		.btns
			font-size: 19px
			margin-top: 2.5em

			* + *
				margin-left: 1em
</style>
