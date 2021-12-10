<template>
	<div class="btn">
		<button>{{ animal }}</button>
	</div>
</template>

<script>
export default {
	props: ["animal"],
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
		width: 100%;
		height: 100%;
	}
}
</style>
