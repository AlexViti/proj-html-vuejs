<template>
	<!-- Main with a lot of sections -->
<main>
	<hero-main />
	<div class="container-primary">
		<h2>Do You Have A Construction Project We Can Help With?</h2>
		<link-button :border="true" :color="'secondary'" />
		<columns-section />
	</div>
</main>
</template>

<script>
import ColumnsSection from './sections/ColumnsSection.vue'
import HeroMain from './sections/HeroMain.vue'
import LinkButton from './utility/LinkButton.vue'

export default {
	components: { HeroMain, LinkButton, ColumnsSection },
	name: 'MainAvada'
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables'

.container-primary
	background-color: $brightSunVib
	text-align: center

	h2
		font-size: 32px
		font-weight: 400
		padding: 3rem 0 1rem

	a
		transform: translateY(50%)
</style>
