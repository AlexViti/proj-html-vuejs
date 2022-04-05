<template>
  <a :class="['btn-' + color, { 'btn-bordered' : border }]" :href="href" v-html="text" />
</template>

<script>
export default {
	name: 'LinkButton',
	props: {
		link: {
			type: String,
			required: false,
			default: '#'
		},
		getAQuote: {
			type: Boolean,
			required: false,
			default: false
		},
		text: {
			type: String,
			required: false,
			default: 'get a free quote'
		},
		color: {
			type: String,
			default: 'transparent',
			required: false,
			validator: (val) => ['primary', 'secondary', 'transparent', 'white'].includes(val)
		},
		border: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		href() {
			if (this.link === '#') return (this.getAQuote ? '#get-quote' : '#')
			else return this.link
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/partials/variables'

a
	text-transform: uppercase
	align-self: center
	padding: .93em 2.07em
	display: inline-block
	font-size: calc(1em - 1px)
	font-weight: 600
	letter-spacing: 1px

	transition: color 0.2s, background-color 0.2s ease

.btn-white
	background-color: white

.btn-primary,
.btn-secondary:hover,
.btn-transparent:hover
	color: $darkGray
	background-color: $brightSun

.btn-secondary,
.btn-primary:hover,
.btn-white:hover
	color: white
	background-color: $darkGray

.btn-bordered
	border: 2px solid white

	&:hover
		color: black
		border-color: black
		background-color: white
</style>
