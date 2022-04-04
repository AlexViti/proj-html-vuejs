<template>
<section :id="'s' +  section.order + '-' + section.title.toLowerCase().substring(0, this.section.title.indexOf(' '))">
	<h2 v-html="section.title" />
	<p v-for="(paragraph, i) in section.paragraphs" :key="i" v-html="paragraph" />
	<div :class="'container-' + columns">
		<slot />
	</div>
</section>
</template>

<script>
export default {
	name: 'ColumnSection',
	props: { section: Object },
	computed: {
		columns() {
			return this.section.cards.length
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/variables'

section
	text-align: center
	padding: 5rem 0
	min-height: $sectionHeight
	display: flex
	flex-direction: column
	justify-content: center

	h2
		position: relative
		font-size: 32px
		font-weight: 400
		letter-spacing: 1px
		text-transform: capitalize
		padding-bottom: .8em

		&::after
			content: ''
			position: absolute
			left: 50%
			bottom: 0
			transform: translateX(-50%)
			width: 206px
			border-bottom: 2px solid $primary

	p
		color: $cardTextColor
		width: 50%
		margin: 0 auto
		padding: 2rem
		line-height: 1.5em
		font-size: 15px

	[class^='container-']
		margin: 3rem auto 0
		display: grid
		gap: 2rem

	.container-4
		width: clamp(600px, 80%, 1800px)
		grid-template-columns: repeat(4, 1fr)

	.container-3
		width: clamp(600px, 75%, 1200px)
		grid-template-columns: repeat(3, 1fr)
</style>
