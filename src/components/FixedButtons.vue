<template>
<div class="fixed-btns">
	<button>
		<div class="icons">
			<rectangle-history />
			<rectangle-history />
		</div>
		<span>Demos</span>
	</button>
</div>
</template>

<script>
import RectangleHistory from './utility/RectangleHistory.vue'

export default {
	name: 'FixedButtons',
	components: { RectangleHistory }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables';

.fixed-btns {
	position: absolute;
	top: $headerHeight + 20px;
	right: 20px;
}

button {
	color: $iconGray;

	.icons {
		font-size: 2.5rem;
		max-width: 3.5rem;
		white-space: nowrap;
		overflow: hidden;
		padding-left: .5rem;

		> * {
			transition: transform 0.2s;
		}

		* + * {
		margin-left: 1em;
		}
	}

	&:hover .icons > * {
		transform: translateX(calc(-100% - 1em));
	}
}
</style>
