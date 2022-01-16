<template>
	<div>
		<header class="header">
			<p class="header__ttl">ユーザーランキング</p>
		</header>
		<div class="search-type">
			<div class="search-type__item">
				<p>ベスト</p>
			</div>
			<div class="search-type__item">
				<p>オススメ</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header {
	width: 100vw;
	height: 65px;
	border-bottom: solid 1px #f76464;
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	&__ttl {
		color: #f76464;
		font-size: 14px;
	}
}

.search-type {
	width: 100%;
	height: 40px;
	display: flex;
	&__item {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		&:first-child {
			color: #f76464;
		}
	}
}
</style>
