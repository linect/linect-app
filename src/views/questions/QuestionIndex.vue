<template>
	<div>
		<QuestionHeader />
		<transition>
			<QuestionTtl />
			<QuestionAnimal />
		</transition>
	</div>
</template>

<script>
import QuestionHeader from "@/components/Questions/QuestionHeader.vue";
import QuestionTtl from "@/components/Questions/QuestionTtl";
import QuestionAnimal from "@/components/Questions/QuestionAnimal";

export default {
	components: {
		QuestionHeader,
		QuestionTtl,
		QuestionAnimal,
	},
};
</script>

<style scoped lang="scss"></style>
