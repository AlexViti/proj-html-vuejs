<template>
<div class="fixed-btns">
	<div class="top-right">
		<cool-button :text="'Demos'">
			<rectangle-history v-for="i in 2" :key="i"/>
		</cool-button>
		<cool-button :text="'On sale'">
			<div class="on-sale">
				<span>
					<span>$</span>39
				</span>
				</div>
			<shopping-cart />
		</cool-button>
	</div>
	<div class="bottom">
		<scroll-to-top-btn />
	</div>
</div>
</template>

<script>
import CoolButton from './utility/CoolButton.vue'
import RectangleHistory from './utility/RectangleHistory.vue'
import ScrollToTopBtn from './utility/ScrollToTopBtn.vue'
import ShoppingCart from './utility/ShoppingCart.vue'

export default {
	name: 'FixedButtons',
	components: { RectangleHistory, CoolButton, ShoppingCart, ScrollToTopBtn }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables'

.fixed-btns
	.top-right,.bottom
		position: fixed
		z-index: 100

	.top-right
		top: $headerHeight + 20px
		right: 20px
		color: $iconGray
		display: flex
		flex-direction: column

		> * + *
			margin-top: .5rem

	.bottom
		bottom: 0
		right: 74px

.on-sale
	display: inline-block
	text-align: center
	height: 32px
	width: 40px
	overflow: hidden
	color: $onSaleColor
	font-size: 26px
	font-weight: 800
	margin-left: -6px
	margin-right: -3px

	span > span
		vertical-align: 30%
		font-size: .55em
</style>
