<template>
<button @click="scrollToTop">
	<font-awesome-icon icon="fa-solid fa-chevron-up" />
</button>
</template>

<script>
export default {
	name: 'ScrollToTopBtn',
	methods: {
		scrollToTop: () => window.scrollTo(top)
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/partials/variables';
@import '../../assets/styles/partials/mixins';

button {
	@include button-reset;
	color: white;
	background: $darkGray;
	height: 35px;
	width: 48px;
	display: grid;
	place-items: center;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
</style>
