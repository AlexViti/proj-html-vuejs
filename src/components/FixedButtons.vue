<template>
<div class="fixed-btns">
	<button>bottone</button>
</div>
</template>

<script>
export default {
	name: 'FixedButtons'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables';

.fixed-btns {
	position: absolute;
	top: $headerHeight + 20px;
	right: 20px;
}
</style>
