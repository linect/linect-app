<template>
	<div class="btn">
		<button>{{ btnText }}</button>
	</div>
</template>

<script>
export default {
	props: ["btnText"],
};
</script>

<style lang="scss" scoped>
.btn {
	width: 300px;
	height: 35px;
	border: 1px solid $btnSelected;
	border-radius: 8px;
	& > button {
		display: block;
		font-size: 16px;
		width: 100%;
		height: 100%;
	}
}
</style>
