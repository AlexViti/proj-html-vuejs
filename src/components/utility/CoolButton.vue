<template>
<button>
	<div class="icons">
		<slot></slot>
	</div>
	<h5 v-html="text" />
</button>
</template>

<script>
export default {
	name: 'CoolButton',
	props: {
		text: String
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/partials/variables';
@import '../../assets/styles/partials/mixins';

button {
	@include button-reset;
	background-color: white;
	height: 66px;
	width: 66px;
	padding: 6px 0;
	border-radius: 6px;
	box-shadow: 0 -5px 20px 5px #00000026;
	z-index: 10;

	.icons {
		white-space: nowrap;
		overflow: hidden;
		padding-left: 17px;

		> * {
			transition: transform 0.2s cubic-bezier(0.21, 0.6, 0.35, 1);
		}

		* + * {
		margin-left: 32px;
		}
	}

	&:hover .icons > * {
		transform: translateX(calc(-100% - 32px));
	}

	h5 {
		font-size: 12px;
	}
}
</style>
