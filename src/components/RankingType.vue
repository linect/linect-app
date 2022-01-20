<template>
	<div class="ranking-types">
		<div class="ranking-types__item" :style="style">
			<p>{{ type }}</p>
			<div>
				<img :src="require(`../assets/${src}`)" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: String,
		src: String,
		bgColor: {
			type: String,
			default: "tomato",
		},
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
.ranking-types {
	width: 100%;
	&__item {
		width: 150px;
		height: 200px;
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		background-color: var(--bgColor);
		border-radius: 8px;
		margin-left: 16px;
		p {
			font-size: 16px;
		}
		div {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			position: relative;
			background-color: #fff;
			img {
				width: 59px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
}
</style>
