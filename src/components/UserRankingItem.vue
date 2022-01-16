<template>
	<div class="user-wrap">
		<p class="user-wrap__rank">{{ rank }}</p>
		<div class="user-wrap__img">
			<img :src="require(`../assets/${src}`)" alt="" />
		</div>
		<div class="user-wrap__desc">
			<p class="user-wrap__name">{{ name }}</p>
			<div class="user-wrap__info">
				<p>{{ type }}</p>
				<p>総いいね数1.3k</p>
				<p>フォロワー40000人</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		type: String,
		rank: Number,
		src: String,
	},
};
</script>

<style lang="scss" scoped>
.user-wrap {
	width: 350px;
	height: 60px;
	display: flex;
	border-radius: 8px;
	padding: 10px 16px;
	border: solid 1px #797777;
	margin-bottom: 8px;
	&__rank {
		font-size: 14px;
		align-self: center;
		color: #f76464;
	}
	&__img {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		overflow: hidden;
		align-self: center;
		margin-left: 16px;
		margin-right: 16px;
		& > img {
			width: 25px;
			height: 25px;
		}
	}
	&__desc {
		font-size: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	&__info {
		display: flex;
		color: #797777;
		p {
			margin-right: 8px;
		}
	}
}
</style>
