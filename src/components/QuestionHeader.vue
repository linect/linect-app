<template>
	<header>
		<div class="header">
			<img class="header__img" src="@/assets/logo.svg" alt="" />
		</div>
	</header>
</template>

<script>
export default {
	name: "QuestionHeader",
};
</script>

<style scoped lang="scss">
.header {
	background-color: tomato;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
	&__img {
	}
}
</style>
