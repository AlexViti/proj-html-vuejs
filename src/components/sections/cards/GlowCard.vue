<template>
<div class="card">
	<div class="wrapper">
		<div class="icon" :style="{ '--background-icon': card.iconColor }"><i :class="card.icon" /></div>
		<h3 v-html="card.title" />
	</div>
	<p v-html="card.paragraph" />
</div>
</template>

<script>
export default {
	name: 'GlowCard',
	props: { card: Object }
}
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/partials/variables'
.card
	color: $cardTextColor
.icon
	position: relative
	color: #ffffff
	font-size: 60px
	margin: 0 auto
	height: 2em
	width: 2em
	border-radius: 50%
	display: grid
	place-items: center
	background: var(--background-icon)
	transition: transform .3s ease-out

	&::before
		position: absolute
		content: ''
		display: block
		border-radius: 50%
		height: 100%
		width: 100%
		transition: box-shadow .6s linear, transform .3s ease-out

.wrapper:hover .icon
	transform: scale(.9)
	background: $brightSun

	&::before
		transform: scale(1.5)
		box-shadow: none
		box-shadow: 0 0 15px 10px #fed23fbb //TODO: fix animation

.wrapper:hover h3
	color: $brightSun

h3
	position: relative
	font-size: 16px
	font-weight: 400
	padding: .6em 0 1em
	&::after
		content: ''
		display: block
		position: absolute
		height: 100%
		width: 20px
		top: 0
		left: 50%
		transform: translateX(-50%)
		border-bottom: 2px solid $cardTextColor

p
	font-size: 15px
	font-weight: 500
	padding-top: 1em
	line-height: 1.6em

</style>
