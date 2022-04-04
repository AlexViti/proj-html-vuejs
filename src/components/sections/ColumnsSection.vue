<template>
<section>
	<h2 v-html="section.title" />
	<p v-for="(paragraph, i) in section.paragraphs" :key="i" v-html="paragraph" />
	<slot />
</section>
</template>

<script>
export default {
	name: 'ColumnSection',
	props: { section: Object }
}
</script>

<style lang="sass" scoped>
.container-4
	display: grid
	grid-template-columns: repeat(4, 1fr)
</style>
