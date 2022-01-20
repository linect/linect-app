<template>
	<main>
		<div class="container">
			<h2 class="container__ttl">あなたのタイプは...</h2>
		</div>
	</main>
</template>

<script>
export default {
	mounted:function(){
		setTimeout(() => {
			this.$router.push('/DiagnosisSakura');
		}, 2000);
	}
};
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
