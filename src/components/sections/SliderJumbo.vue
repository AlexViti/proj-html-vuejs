<template>
<div class="container">
	<div class="wrapper">
		<h2>Our Home Owners Say</h2>
		<div v-if="theSwitcher" class="slide">
			<img class="pic" src="../../assets/img/home-testimonial-1.jpg" alt="Testimonial pic" height="150" width="150">
			<p>“No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.”</p>
			<strong>HARRY SMITH • NEW HOME OWNER</strong>
		</div>
		<div v-else class="slide">
			<img class="pic" src="../../assets/img/home-testimonial-2.jpg" alt="Testimonial pic" height="150" width="150">
			<p>“Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.”</p>
			<strong> JOHN DOE • PROPERTY INVESTOR</strong>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'SliderJumbo',
	data: () => ({
		theSwitcher: true
	})
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/variables'
@import '../../assets/styles/partials/mixins'
.container
	@include concaveBg(url('../../assets/img/home-parallax.jpg'), $sectionHeight, $cardBg)
	color: white
	display: grid
	place-content: center

	.wrapper
		text-align: center

		.pic
			border-radius: 50%
			margin: 1rem 0

		h2
			@include headingBorderBottom

		.slide
			font-size: 18px
			letter-spacing: 2px

			p
				font-weight: 500
				font-style: italic
				line-height: calc(5/3 * 1em)
				width: 43%
				margin: 0 auto 1em

			strong
				font-weight: 700
</style>
