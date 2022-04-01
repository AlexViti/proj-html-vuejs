<template>
<!-- Header with logo and navbar -->
<header>
	<nav>
		<!-- Logo linked to the homepage -->
		<a href="/index.html" class="logo"><img :src="logo" alt="Avada Construction"></a>
		<ul>
			<li v-for="(link, i) in links" :key="i"><a :href="link.href" v-html="link.text" /></li>
			<li> <link-button :getAQuote="true" :text="'get quote'" :color="'gold'" /> </li>
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
		links: headerLinks
	})
}
</script>

<style lang="scss" scoped>
header {
	padding: 1rem 0 2rem;

	nav {
		width: clamp(600px, 90%, 1714px);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		ul {
			display: flex;

			li + li {
				margin-left: 2rem;
			}

			a{
				text-transform: uppercase;
			}
		}
	}
}
</style>
