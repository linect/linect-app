<template>
	<div>
		<header>
			<div class="header">
				<img class="header__img" src="@/assets/logo.svg" alt="" />
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: "QuestionHeader",
};
</script>

<style scoped lang="scss">
.header {
	background-color: $HeaderColor;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
}
</style>
