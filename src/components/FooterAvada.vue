<template>
<!-- Footer splitted in 2  -->
<footer>
	<div class="footer-top"></div>
	<div class="footer-bottom">
		<div class="copy">©COPYRIGHT 2012 - 2022 | AVADA THEME BY <a href="https:/theme-fusion.com" target="_blank">THEMEFUSION</a> | ALL RIGHTS RESERVED | POWERED BY <a href="https:/wordpress.com" target="_blank">WORDPRESS</a></div>
		<div class="social">
			<a class="tooltip" :aria-describedby="'social-' + i" target="_blank"
				v-for="(link, i) in socialLinks" :key="i" :href="link.href"
			>
				<div class="tooltiptext" :id="'social-' + i" v-text="link.name" />
				<font-awesome-icon :icon="'fa-brands ' + link.icon" />
			</a>
		</div>
	</div>
</footer>
</template>

<script>
export default {
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

<style lang="scss" scoped>
@import '../assets/styles/partials/variables';
footer {
	color: $footerText;
	font-weight: 500;

	.footer-top {
		background: $codGray;
	}

	.footer-bottom {
		background: $black;
		padding: 30px 6%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.copy {
			font-size: 12px;
		}

		.copy a {
			color: $footerLink;
		}

		.social {
			a {
				font-size: 17px;
				& + a {
					margin-left: 1.3rem;
				}
				.tooltiptext {
					font-size: 14px;
				}
			}
		}
	}
}

/* Tooltip container */
.tooltip {
	text-transform: capitalize;
	position: relative;
	display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
	opacity: 0;
	background-color: $codGray;
	text-align: center;
	padding: .3em .5em;

	/* Position the tooltip text - see examples below! */
	position: absolute;
	z-index: 1;
	bottom: 100%;
	left: 50%;
	transform: translate(-50%, -10px);

	transition: opacity 0.2s ease;

	&::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		display: block;
		border-style: solid;
		border-width: 6px 8px 0;
		border-color: $codGray transparent transparent transparent;
	}
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
	opacity: .9;
}
</style>
