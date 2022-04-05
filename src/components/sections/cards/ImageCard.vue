<template>
<div class="card">
	<div class="image">
		<img :src="card.img" alt="" />
		<div class="hover">
			<div class="btns">
				<a class="icon" href="#">
					<font-awesome-icon icon="fa-solid fa-link" />
				</a>
				<span class="icon">
					<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
				</span>
			</div>
			<h4 v-html="card.title" />
			<div v-if="card.tag" class="tag" v-html="card.tag" />
		</div>
	</div>
	<article v-if="card.article">
		<h3 v-html="card.title" />
		<div class="date" v-html="card.article.date" />
		<p v-html="card.article.paragraph" />
	</article>
</div>
</template>

<script>
export default {
	name: 'ImageCard',
	props: {
		card: Object
	}
}
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/partials/variables'
.image
	position: relative

	img
		width: 100%

	.hover
		color: #ffffff
		position: absolute
		top: 0
		left: 0
		height: 100%
		width: 100%
		background-color: $primary
		opacity: 0
		display: grid
		place-content: center
		transform: scaleY(0)
		transition: transform .3s ease-out, opacity .3s ease-out

		.btns
			color: #000000
			.icon
				display: inline-block
				vertical-align: center
				line-height: 50px
				width: 50px
				border-radius: 50%
				background-color: #ffffff
				cursor: pointer

				& + .icon
					margin-left: 1em

		h4
			text-transform: capitalize
			font-size: 18px
			font-weight: 400
			margin: 1rem 0 .8rem

		.tag
			font-size: 12px

	&:hover .hover
		opacity: 1
		transform: scaleY(1)

article
	padding: 1.5rem
	margin-top: -3px
	text-align: left
	background: white
	color: $cardTextColor

	h3
		color: $darkGray
		font-size: 24px
		letter-spacing: 1px
		font-weight: 500

	.date
		font-size: 12px
		margin: 1em 0 2em

	p
		font-size: 15px
		font-weight: 500
		border-top: 2px solid #eae8e8
		padding: 1em 0
		line-height: 2em
</style>
