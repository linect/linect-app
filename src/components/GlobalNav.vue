<template>
    <div class="nav">
        <ul class="nav__wrap">
            <li class="nav__wrap__content">
                <router-link to="Home" class="nav__wrap__content__link" exact>
                    <img src="../assets/home-icon.svg" alt="ホームアイコン">
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <router-link to="Search" class="nav__wrap__content__link" exact>
                    <img src="../assets/search-icon.svg" alt="虫眼鏡アイコン">
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <router-link to="Ranking" class="nav__wrap__content__link" exact>
                    <img src="../assets/ranking-icon.svg" alt="カップアイコン">
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <router-link to="User" class="nav__wrap__content__link" exact>
                    <img src="../assets/user-icon.svg" alt="人物アイコン">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.nav{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    &__wrap{
        width: 100vw;
        height: 70px;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &__content{
            width: 25px;
            height: 25px;
        }
    }
}
</style>