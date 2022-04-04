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
import LinkButton from '../../utility/LinkButton.vue'

export default {
	components: { LinkButton },
	name: 'FlippingCard',
	props: { card: Object },
	data: () => ({
		height: 0,
		windowWidth: 0
	}),
	mounted() {
		this.height = Math.max(parseInt(window.getComputedStyle(this.$refs.front).height), parseInt(window.getComputedStyle(this.$refs.back).height))
	}
}
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/partials/variables/palette'

.card
	line-height: 1.8em
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
	transition: transform .4s cubic-bezier(0.2, 0.85, 0.4, 1.275)
	transform-style: preserve-3d

.front
	background-color: $cardBg
	color: $cardTextColor
	padding: 1.6rem

	h3
		color: $darkGray
		font-size: 32px
		font-weight: 500
		margin: 1.5rem 0

.back
	background-color: $primary
	color: $darkGray
	transform: rotateY(180deg)
	padding: 1.5rem
	font-size: 15px

	h3
		text-transform: uppercase
		font-weight: 400
		font-size: 18px

	p
		margin: 1.2em 0

.front, .back
	border-radius: 10px
	position: absolute
	-webkit-backface-visibility: hidden
	backface-visibility: hidden

.icon
	margin: 0 auto
	font-size: 25px
	height: 62px
	width: 62px
	display: grid
	border: 1px solid $cardTextColor
	border-radius: 50%
	place-items: center

.parent-height
	height: 100%
</style>
