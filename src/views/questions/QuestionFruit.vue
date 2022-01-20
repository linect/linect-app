<template>
	<main>
		<QuestionHeader />
		<div class="bottom-container">
			<h1 class="bottom-container__ttl">次のうち好きなフルーツは？</h1>
			<div class="bottom-container__select-box">
				<div class="select-btn">
					<button>さくらんぼ</button>
				</div>
				<div class="select-btn">
					<button>ぶどう</button>
				</div>
				<div class="select-btn last">
					<button>ばなな</button>
				</div>
			</div>
			<div class="next-btn">
				<router-link to="QuestionResult" class="next-btn__link">次へ</router-link>
			</div>
			<p class="back">戻る</p>
		</div>
	</main>
</template>

<script>
import QuestionHeader from "@/components/Questions/QuestionHeader.vue";
export default {
	components: {
		QuestionHeader,
	}
};
</script>

<style lang="scss" scoped>
.bottom-container {
	background-color: #fff;
	height: 50vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	&__ttl {
		font-size: 20px;
		color: $MainTextColor;
		margin: 43px 0 60px;
	}
	&_select-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.select-btn {
		width: 300px;
		height: 35px;
		border-radius: 10px;
		border: solid 1px $btnSelected;
		text-align: center;
		line-height: 35px;
		margin-bottom: 40px;
		font-size: 16px;
		button {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.last {
		margin-bottom: 0;
	}
	.next-btn {
		width: 300px;
		height: 50px;
		border-radius: 10px;
		border: solid 1px #d5d1ce;
		text-align: center;
		line-height: 50px;
		margin-top: 20px;
		font-size: 14px;
		background-color: #D5D1CE;
		&__link {
			display: block;
			width: 100%;
			height: 100%;
			text-decoration: none;
			color: #fff;
			font-size: 14px;
		}
	}
	.back {
		margin-top: 16px;
		font-size: 12px;
	}
}
</style>
