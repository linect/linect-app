<template>
	<div>
		<QuestionHeader />
		<keep-alive>
			<QuestionTtl v-if="questionState === 'index'" />
			<QuestionAnimal v-if="questionState === 'q1'" />
			<QuestionFruit v-if="questionState === 'q2'" />
		</keep-alive>
	</div>
</template>

<script>
import QuestionHeader from "@/components/Questions/QuestionHeader.vue";
import QuestionTtl from "@/components/Questions/QuestionTtl";
import QuestionAnimal from "@/components/Questions/QuestionAnimal";
import QuestionFruit from "@/components/Questions/QuestionFruit";

export default {
	components: {
		QuestionHeader,
		QuestionTtl,
		QuestionAnimal,
		QuestionFruit,
	},
	data() {
		return {
			questionState: "index",
		};
	},
	computed:{

	}
};
</script>

<style scoped lang="scss"></style>
