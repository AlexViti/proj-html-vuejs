<template>
<div></div>
</template>

<script>
export default {
	name: 'BannerMain'
}
</script>

<style lang="sass" scoped>
div
	background: url('../assets/img/home-banner-1.jpg') no-repeat center center
	background-size: cover
	height: 600px
	overflow: hidden

div::before
	content: ''
	display: block
	height: 300px
	width: 110vw
	background: white
	border-radius: 50%
	transform: translate(-5vw, -200px)

div::after
	content: ''
	display: block
	height: 300px
	width: 110vw
	background: white
	border-radius: 50%
	transform: translate(-5vw, 200px)
</style>
