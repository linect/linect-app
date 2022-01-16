<template>
	<div class="genre-item-wrap">
		<div class="genre-item" :style="style">
			<p class="genre-item__genre">{{ genre }}</p>
			<div class="genre-item__img">
				<img :src="require(`../assets/${src}`)" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		genre: String,
		src: String,
		bgColor: {},
	},
	computed: {
		style() {
			return {
				"--bgColor": this.bgColor,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.genre-item-wrap {
	width: 100%;
}
.genre-item {
	width: 150px;
	height: 200px;
	background-color: var(--bgColor);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 36px 0;
	&__genre {
		font-size: 16px;
		color: #ffffff;
	}
	&__img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 32px;
		img {
			width: 80px;
		}
	}
}
</style>
