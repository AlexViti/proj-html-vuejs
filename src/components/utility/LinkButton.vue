<template>
  <a :class="'btn-' + color" :href="href" v-html="text" />
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
			default: 'get a quote'
		},
		color: {
			type: String,
			validator: (val) => ['primary', 'secondary', 'transparent'].includes(val)
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

<style lang="scss" scoped>
@import '../../assets/styles/partials/variables';

a {
	text-transform: uppercase;
	align-self: center;
	padding: .93em 2.07em;
	font-size: calc(1em - 1px);
	font-weight: 600;
	letter-spacing: 1px;

	transition: color 0.2s, background-color 0.2s ease;
}

.btn-primary,
.btn-secondary:hover {
	color: $darkGray;
	background-color: $brightSun;
}

.btn-secondary,
.btn-primary:hover {
	color: white;
	background-color: $darkGray;
}
</style>
