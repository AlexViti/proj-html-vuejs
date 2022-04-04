<template>
<div class="container">
	<div class="wrapper">
		<div v-for="(card, i) in cards" :key="i" class="card">
			<i :class="card.icon" />
			<number :from="0" :to="card.number" :duration="3" />
			<h4 v-html="card.text" />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'BannerMain',
	data: () => ({
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
	})
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/variables'
.container
	position: relative
	background: url('../../assets/img/home-banner-1.jpg') no-repeat center center
	background-size: cover
	height: 600px
	overflow: hidden
	display: grid
	place-content: center
	color: $primary
	text-align: center

	&::after, &::before
		content: ''
		position: absolute
		display: block
		height: 300px
		width: 115vw
		background: white
		border-radius: 50%

	&::before
		top: 0
		transform: translate(-8.5vw, calc(-2 / 3 * 100%))

	&::after
		bottom: 0
		transform: translate(-8.5vw, calc(2 / 3 * 100%))

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
