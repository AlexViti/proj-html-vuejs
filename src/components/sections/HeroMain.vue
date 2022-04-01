<template>
<!-- Hero section that takes all the available viewport height -->
<section id="hero"></section>
</template>

<script>
export default {
	name: 'HeroMain'
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/partials/variables';
#hero {
	margin-top: $headerHeight;
	height: calc(100vh - $headerHeight);
	background: url('../../assets/img/home-hero.jpg');
}
</style>
