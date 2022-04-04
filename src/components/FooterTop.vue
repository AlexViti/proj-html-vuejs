<template>
<div class="footer-top">
	<section>
		<h5><img :src="footerLogo" alt="Avada Construction"></h5>
		<p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
		<link-button :text="'Learn more'" :color="'primary'" />
	</section>
	<section>
		<h5>Latest tweets</h5>
		<!-- Tweet of the screen: <tweet :id="'1332383066631892993'" :options="{ theme: 'dark' }" /> -->
		<timeline :id="'Theme_Fusion'"
			:sourceType="'profile'"
			:options="{ tweetLimit: '1', theme: 'dark', chrome: 'nofooter noheader noborders transparent' }"
		/>
	</section>
	<section>
		<h5>Contact us today</h5>
		<ul>
			<li>
				Corporate Location <br>
				1600 Amphitheatre Parkway <br>
				London WC1 1BA <br>
			</li>
			<li>
				Residential Location <br>
				9521 Broadsberry Avenue <br>
				Paddington RC7 9ZA <br>
			</li>
			<li>1.800.458.556 / 1.800.532.2112</li>
			<li>info@your-domain.com</li>
			<li>Monday - Friday: 9:00 AM - 6:00 PM</li>
			<li>Saturday - Sunday: 9:00 AM - 12:00 PM</li>
		</ul>
	</section>
	<section>
		<h5>Our location</h5>
		<img :src="map" alt="Map" class="map" />
	</section>
</div>
</template>

<script>
import footerLogo from '../assets/img/footer-logo.png'
import map from '../assets/img/staticmap.png'
import LinkButton from './utility/LinkButton.vue'
import { Timeline } from 'vue-tweet-embed'

export default {
	components: { LinkButton, Timeline },
	name: 'FooterTop',
	data: () => ({
		footerLogo,
		map
	})
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables'

.footer-top
	font-size: 15px
	background: $codGray
	padding: 80px 6%
	display: grid
	grid-template-columns: repeat(4, 1fr)
	gap: 2rem

	h5
		font-size: 16px
		color: $brightSunVib
		text-transform: uppercase
		letter-spacing: 2px
		margin-bottom: 1rem

	p
		margin-bottom: 30px
		line-height: 2.3em

	ul
		line-height: 1.5em
		padding-inline-start: 2ch

		li
			padding-left: 1em
			margin-top: 1em

			&::marker
				font-family: 'Font Awesome 5 Free'
				font-weight: 900

			&:first-child::marker
				content: '\f0ac'

			&:nth-child(2)::marker
				content: '\f015'

			&:nth-child(3)::marker,
			&:nth-child(4)::marker
				content: '\f095'

			&:nth-last-child(-n + 2)::marker
				content: '\f017'
				font-weight: 400

	img.map
		width: 100%
</style>
