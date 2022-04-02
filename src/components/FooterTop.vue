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
			:options="{ tweetLimit: '1', theme: 'dark' }" />
	</section>
	<section>

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

	h5 {
		font-size: 16px;
		color: $brightSunVib;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 1.5rem;
	}

	p {
		margin-bottom: 20px;
		line-height: 2em;
	}
}
</style>
