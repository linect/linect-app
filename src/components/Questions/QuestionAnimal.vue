<template>
	<main>
		<div class="bottom-container">
			<h1 class="bottom-container__ttl">次のうち好きな動物は？</h1>
			<div class="bottom-container__select-box">
				<div class="select-btn">
					<button>犬</button>
				</div>
				<div class="select-btn">
					<button>猫</button>
				</div>
				<div class="select-btn last">
					<button>ウサギ</button>
				</div>
			</div>
			<div class="next-btn">
				<button>次へ</button>
			</div>
			<p class="back">戻る</p>
		</div>
	</main>
</template>

<script>
export default {};
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
		button {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.back {
		margin-top: 16px;
		font-size: 12px;
	}
}
</style>
