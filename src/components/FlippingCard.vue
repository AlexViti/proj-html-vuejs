<template>
<div class="card" :style="{ height: height +'px' }">
	<div class="inner">
		<div class="front" ref="front" :class="{ 'parent-height': height }">
			<div class="icon">
				<i :class="card.icon"></i>
			</div>
			<h3 v-html="card.title" />
			<p v-html="card.paragraph" />
		</div>
		<div class="back" ref="back" :class="{ 'parent-height': height }">
			<h3 v-html="card.backCard.title" />
			<p v-html="card.backCard.paragraph" />
			<link-button :text="'get a quote'" :color="'white'" />
		</div>
	</div>
</div>
</template>

<script>
import LinkButton from './utility/LinkButton.vue'

export default {
	components: { LinkButton },
	name: 'FlippingCard',
	props: { card: Object },
	data: () => ({
		height: 0
	}),
	mounted() {
		this.height = Math.max(parseInt(window.getComputedStyle(this.$refs.front).height), parseInt(window.getComputedStyle(this.$refs.back).height))
	}
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables/palette'

.card
	background-color: transparent
	width: 100%
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
	color: $cardTextColor

.back
	background-color: $primary
	transform: rotateY(180deg)

	p
		margin: 1em

.front, .back
	position: absolute
	-webkit-backface-visibility: hidden
	backface-visibility: hidden

.icon
	margin: 0 auto
	font-size: 25px
	height: 60px
	width: 60px
	display: grid
	border: 1px solid $cardTextColor
	border-radius: 50%
	place-items: center

.parent-height
	height: 100%
</style>
