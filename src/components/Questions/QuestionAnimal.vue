<template>
	<main>
		<div class="bottom-container">
			<h1 class="bottom-container__ttl">次のうち好きな動物は？</h1>
			<div class="bottom-container__select-box">
				<SelectBtn btnText="犬" />
				<SelectBtn btnText="猫" />
				<SelectBtn btnText="ウサギ" />
			</div>
		</div>
	</main>
</template>

<script>
import SelectBtn from "@/components/btn/SelectBtn.vue";

export default {
	components: {
		SelectBtn,
	},
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
	}
}
</style>
