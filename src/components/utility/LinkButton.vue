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
			required: true,
			validator: (value) => { ['gold', 'gray', 'transparent'].includes(value) }
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
a {
	text-transform: uppercase;
}

.btn-gold {
	background-color: gold;
}
</style>
