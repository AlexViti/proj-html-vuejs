<template>
<div class="container">
	<div class="wrapper" v-observe-visibility="!animationStarted ? visibilityChanged : false">
		<div v-for="(card, i) in cards" :key="i * 10" class="card">
			<i :class="card.icon" />
			<number v-if="showNumber" :from="0" :to="card.number" :delay="0.5" :duration="3" />
			<div v-else>0</div>
			<h4 v-html="card.text" />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'BannerMain',
	data: () => ({
		showNumber: false,
		animationStarted: false,
		cards: [
			{
				icon: 'fas fa-suitcase',
				number: 3534,
				text: 'Planning Applications'
			},
			{
				icon: 'far fa-building',
				number: 896,
				text: 'Completed projects'
			},
			{
				icon: 'fas fa-users',
				number: 172,
				text: 'Trained professionals'
			},
			{
				icon: 'fas fa-globe',
				number: 19,
				text: 'International offices'
			}
		]
	}),
	methods: {
		visibilityChanged(isVisible, entry) {
			this.showNumber = isVisible
			this.animationStarted = isVisible
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/mixins'
@import '../../assets/styles/partials/variables'
.container
	@include concaveBg(url('../../assets/img/home-banner-1.jpg'))
	display: grid
	place-content: center
	color: $primary
	text-align: center

	.wrapper
		display: grid
		grid-template-columns: repeat(4, 1fr)
		gap: 4rem

		.card
			font-size: 60px
			font-weight: 500

			i
				font-size: 70px
				display: block

			h4
				color: white
				font-size: 16px
				font-weight: 500
				text-transform: uppercase
				margin-top: .5em
</style>
