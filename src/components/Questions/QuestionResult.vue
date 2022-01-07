<template>
	<main>
		<div class="container">
			<h2 class="container__ttl">あなたのタイプは...</h2>
		</div>
	</main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	&__ttl {
		font-size: 20px;
		color: $MainTextColor;
	}
}
</style>
