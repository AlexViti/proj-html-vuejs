<template>
	<div id="app">
		<!-- Fixed header -->
		<header-avada />
		<!-- Couple of buttons fixed on the right beneath the fixed header  -->
		<fixed-buttons />
		<!-- Main with sections -->
		<main-avada />
		<!-- Footer with some links -->
		<footer-avada />
	</div>
</template>

<script>
import FixedButtons from './components/FixedButtons.vue'
import FooterAvada from './components/FooterAvada.vue'
import HeaderAvada from './components/HeaderAvada.vue'
import MainAvada from './components/MainAvada.vue'

export default {
	name: 'App',
	components: { HeaderAvada, MainAvada, FooterAvada, FixedButtons }
}
</script>

<style lang="sass">
@import './assets/styles/style'
#app
	font-family: 'Raleway', Arial, Helvetica, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
</style>
