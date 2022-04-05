<template>
<div class="banner">
	<div class="container">
		<h2>Building inspiring spaces</h2>
		<link-button color="primary"/>
		<p>Vivamus Sed Consectetur Tellus Dolor Sit Amet, Consectetur Adipiscing Lorem Elit Sadip Ipsum Ets Ficilis Uns.</p>
		<span>Only takes a few seconds!</span>
	</div>
</div>
</template>

<script>
import LinkButton from '../utility/LinkButton.vue'
export default {
	components: { LinkButton },
	name: 'BottomBanner'
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/variables'
.banner
	padding: 100px 90px
	background: url('../../assets/img/about-call-to-action.jpg') no-repeat center 75%
	background-size: cover
	color: white

	.container
		width: clamp(600px, 80%, 1000px)
		margin: 0 auto
		display: grid
		grid-template-columns: 3fr 1.2fr
		gap: 1rem 2rem

		h2
			font-size: 32px
			font-weight: 800
			text-transform: uppercase
			position: relative
			padding-bottom: .8em

			&::after
				content: ''
				position: absolute
				left: 0
				bottom: 0
				width: 206px
				border-bottom: 2px solid $primary

		a, span
			text-align: center

		a
			font-size: 19px
		span
			font-size: 15px
			font-weight: 500

		p
			font-size: 20px
			line-height: 2em
			padding-right: 2rem
</style>
