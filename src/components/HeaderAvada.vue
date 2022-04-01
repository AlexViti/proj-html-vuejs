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

<style lang="scss" scoped>
@import '../assets/styles/partials/variables';

header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: $headerHeight;

	background-color: white;

	nav {
		height: 100%;
		width: clamp(600px, 90%, 1714px);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;

		.logo {
			padding: 2rem;
			display: block;
			height: 100%;

			img {
				height: 100%;
				width: 100%;
				object-fit: contain;
			}
		}

		ul {
			display: flex;

			li {
				display: flex;

				& + li {
					margin-left: 2rem;
				}

				&.selected {
					position: relative;
					color: $brightSunVib;

					&::after {
						content: '';
						display: block;
						position: absolute;
						top: 100%;
						transform: translateX(50%);
						width: 0;
						height: 0;
						border-style: solid;
						border-width: 10px 10px 0 10px;
						border-color: #ffffff transparent transparent transparent;
					}
				}

				a {
					display: flex;
					align-items: center;
					text-transform: uppercase;
				}
			}
		}
	}
}
</style>
