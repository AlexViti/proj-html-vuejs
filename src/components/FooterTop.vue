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
</div>
</template>

<script>
import footerLogo from '../assets/img/footer-logo.png'
import LinkButton from './utility/LinkButton.vue'
import { Timeline } from 'vue-tweet-embed'

export default {
	components: { LinkButton, Timeline },
	name: 'FooterTop',
	data: () => ({
		footerLogo
	})
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables';

.footer-top {
	font-size: 15px;
	background: $codGray;
	padding: 80px 6%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;

	h5 {
		font-size: 16px;
		color: $brightSunVib;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 1rem;
		line-height: 2.3em;
	}

	p {
		margin-bottom: 30px;
	}

	ul {
		line-height: 2em;
		padding-left: 1.5rem;

		li {
			padding-left: 1rem;
		}
		li:first-child::marker {
			content: url(../assets/img/svg/bullets/globe.svg);
		}
	}

}
</style>
