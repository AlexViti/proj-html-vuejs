<template>
<div class="card">
	<div class="inner">
		<div class="front">
			<i :class="card.icon"></i>
			<h3 v-html="card.title" />
			<p v-html="card.paragraph" />
		</div>
		<div class="back">
			<h3 v-html="card.backCard.title" />
			<p v-html="card.backCard.paragraph" />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'FlippingCard',
	props: { card: Object }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables/palette'

.card
	background-color: transparent
	width: 300px
	height: 200px
	perspective: 1000px

	&:hover .inner
		transform: rotateY(180deg)

.inner
	position: relative
	width: 100%
	height: 100%
	text-align: center
	transition: transform 0.8s
	transform-style: preserve-3d

.front
	background-color: $cardBg

.back
	background-color: $primary
	transform: rotateY(180deg)

.front, .back
	position: absolute
	width: 100%
	height: 100%
	-webkit-backface-visibility: hidden
	backface-visibility: hidden
</style>
