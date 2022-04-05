<template>
<section :class="[{ 'bg-gray': section.order % 2 === 0 }, { 'h100': h100}]"
	:id="'s' +  section.order + '-' + section.title.toLowerCase().substring(0, this.section.title.indexOf(' '))"
>
	<h2 v-html="section.title" />
	<p v-for="(paragraph, i) in section.paragraphs" :key="i" v-html="paragraph" />
	<div :class="'container-' + columns + (narrowContainer ? '-narrow' : '')">
		<slot />
	</div>
	<div v-if="section.button" class="container-3">
		<div class="horizzontal-rule" /><link-button :text="section.button"/><div class="horizzontal-rule" />
	</div>
</section>
</template>

<script>
import LinkButton from '../utility/LinkButton.vue'
export default {
	components: { LinkButton },
	name: 'ColumnSection',
	props: {
		section: Object,
		narrowContainer: {
			type: Boolean,
			default: false
		},
		h100: Boolean
	},
	computed: {
		columns() {
			return this.section.cards.length
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/mixins'
@import '../../assets/styles/partials/variables'

section.bg-gray
	background-color: $cardBg
	.horizzontal-rule
		background-color: #ffffff

.h100
	min-height: $sectionHeight

section
	text-align: center
	padding: 6rem 0
	display: flex
	flex-direction: column
	justify-content: center

	h2
		@include headingBorderBottom

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

	[class^='container-4']
		width: clamp(600px, 80%, 1800px)
		grid-template-columns: repeat(4, 1fr)

	.container-4-narrow,
	.container-3
		width: clamp(600px, 75%, 1200px)

	.container-3
		grid-template-columns: repeat(3, 1fr)

.horizzontal-rule
	align-self: center
	height: 2px
	background-color: $cardBg
</style>
