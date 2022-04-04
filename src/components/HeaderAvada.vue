<template>
<!-- Header with logo and navbar -->
<header>
	<nav>
		<!-- Logo linked to the homepage -->
		<a href="/index.html" class="logo"><img :src="logo" alt="Avada Construction"></a>
		<ul>
			<li v-for="(link, i) in links" :key="i"
				@click="selectedIndex = i"
				:class="{ 'selected': selectedIndex == i }"
			>
				<a :href="link.href" v-html="link.text" />
			</li>
			<li> <link-button :getAQuote="true" :text="'get quote'" :color="'primary'" /> </li>
		</ul>
	</nav>
</header>
</template>

<script>
import logo from '../assets/img/construction_logo.png'
import { headerLinks } from '../store/links.js'
import LinkButton from './utility/LinkButton.vue'

export default {
	components: { LinkButton },
	name: 'HeaderAvada',
	data: () => ({
		logo,
		links: headerLinks,
		selectedIndex: 0
	})
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/partials/variables'

header
	height: $headerHeight

	position: fixed
	z-index: 100
	top: 0
	left: 0
	right: 0

	letter-spacing: 1px

	background-color: white
	box-shadow: 0 -5px 20px 5px #00000026

	nav
		height: 100%
		width: clamp(600px, 95%, 1712px)
		margin: 0 auto
		display: flex
		justify-content: space-between

		.logo
			align-self: center

			img
				width: 190px

		ul
			display: flex

			li
				display: flex
				font-size: 15px
				font-weight: 500
				position: relative

				& + li
					margin-left: 50px

				&::after
					content: ''
					display: block
					position: absolute
					top: 100%
					left: 50%
					width: 0
					height: 0
					border-style: solid
					border-width: 8px 10px 0
					border-color: #ffffff transparent transparent transparent

					transform: translate(-50%, -100%)
					transition: transform 0.2s

				&.selected,
				&:not(:last-child):hover
					color: $brightSunVib

					&::after
						transform: translate(- 50%, 0)

				a
					display: flex
					align-items: center
					text-transform: uppercase
</style>
