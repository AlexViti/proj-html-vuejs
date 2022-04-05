<template>
<div class="container"></div>
</template>

<script>
export default {
	name: 'SliderJumbo'
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/mixins'
@import '../../assets/styles/partials/variables'
.container
	@include concaveBg(url('../../assets/img/home-parallax.jpg'), $sectionHeight, $cardBg)
</style>
