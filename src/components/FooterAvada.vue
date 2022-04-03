<template>
<!-- Footer splitted in 2  -->
<footer>
	<footer-top />
	<div class="footer-bottom">
		<div class="copy">©COPYRIGHT 2012 - 2022 | AVADA THEME BY <a href="https:/theme-fusion.com" target="_blank">THEMEFUSION</a> | ALL RIGHTS RESERVED | POWERED BY <a href="https:/wordpress.com" target="_blank">WORDPRESS</a></div>
		<div class="social">
			<a class="tooltip" target="_blank" :href="link.href"
				v-for="(link, i) in socialLinks" :key="i"
			>
				<div class="tooltiptext" v-text="link.name" />
				<font-awesome-icon :icon="'fa-brands ' + link.icon" />
			</a>
		</div>
	</div>
</footer>
</template>

<script>
import FooterTop from './FooterTop.vue'

export default {
	components: { FooterTop },
	name: 'FooterAvada',
	data: () => ({
		socialLinks: [
			{ name: 'facebook', icon: 'fa-facebook-f', href: 'https:/facebook.com' },
			{ name: 'twitter', icon: 'fa-twitter', href: 'https:/twitter.com' },
			{ name: 'youtube', icon: 'fa-youtube', href: 'https:/youtube.com' },
			{ name: 'instagram', icon: 'fa-instagram', href: 'https:/instagram.com' }
		]
	})
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables'
@import '../assets/styles/tooltips'
footer
	color: $footerText
	font-weight: 500

	.footer-bottom
		background: $black
		padding: 30px 6%
		display: flex
		justify-content: space-between
		align-items: center

		.copy
			font-size: 12px

		.copy a
			color: $footerLink

		.social
			a
				font-size: 17px

				& + a
					margin-left: 1.3rem

				.tooltiptext
					font-size: 14px
</style>
