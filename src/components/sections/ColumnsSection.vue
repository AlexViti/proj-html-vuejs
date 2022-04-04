<template>
<section>
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
section
	text-align: center
	padding: 5rem 0

	.container-4
		width: clamp(600px, 80%, 1200px)
		margin: 0 auto
		display: grid
		grid-template-columns: repeat(4, 1fr)
		gap: 2rem
</style>
