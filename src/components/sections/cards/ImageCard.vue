<template>
<div class="card">
	<img :src="card.img" alt="">
</div>
</template>

<script>
export default {
	name: 'ImageCard',
	props: {
		card: Object
	}
}
</script>

<style lang="sass" scoped>
img
	width: 100%
</style>
