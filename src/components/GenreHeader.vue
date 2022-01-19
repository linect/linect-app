<template>
	<div>
		<header class="header">
            <router-link to="CategoryType" class="header__link">
                <img src="../assets/backbtn.svg" alt="">
            </router-link>
			<p class="header__ttl">カテゴリーから探す</p>
		</header>
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
    position: relative;
    &__link{
        position: absolute;
        left: 16px;
    }
	&__ttl {
		color: #f76464;
		font-size: 14px;
	}
}
</style>
