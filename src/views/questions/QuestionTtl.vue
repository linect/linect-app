<template>
	<main>
		<QuestionHeader />
		<div class="bottom-container">
			<h1 class="bottom-container__ttl">次の質問にお答えください</h1>
		</div>
	</main>
</template>

<script>
import QuestionHeader from "@/components/Questions/QuestionHeader.vue";
export default {
	components: {
		QuestionHeader,
	},
	mounted:function(){
		setTimeout(() => {
			this.$router.push('/QuestionAnimal');
		}, 2000);
	}
};
</script>

<style lang="scss" scoped>
.bottom-container {
	background-color: #fff;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	&__ttl {
		font-size: 20px;
		color: $MainTextColor;
	}
}
.v-enter-active {
	transition: opacity 3s;
	opacity: 0;
}
.v-enter-to {
	opacity: 1;
}
.v-enter-active {
	transition: opacity 3s;
	opacity: 0;
}
.v-enter-to {
	opacity: 1;
}
</style>
