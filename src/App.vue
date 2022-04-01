<template>
	<div id="app">
		<!-- Fixed header -->
		<header-avada />
		<!-- Main with sections -->
		<main-avada />
		<!-- Footer with some links -->
		<footer-avada />
	</div>
</template>

<script>
import FooterAvada from './components/FooterAvada.vue'
import HeaderAvada from './components/HeaderAvada.vue'
import MainAvada from './components/MainAvada.vue'

export default {
	name: 'App',
	components: {
		HeaderAvada,
		MainAvada,
		FooterAvada
	}
}
</script>

<style lang="scss">
@import './assets/styles/style';
#app {
	font-family: 'Raleway', Arial, Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body {
	background-color: gray;
}
</style>
