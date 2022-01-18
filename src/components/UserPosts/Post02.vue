<template>
    <div class="post">
        <div class="post__user">
            <div class="post__user__img">
                <img src="../../assets/posts-img/icon-img.png" alt="人物画像">
            </div>
            <p class="post__user__name">yakinikutabetai</p>
            <div class="post__user__flower">
                <img src="../../assets/posts-img/post-cherryblossoms.svg" alt="">
            </div>
            <FollowBtn/>
        </div>
        <div class="post__content">
            <section class="post__content__img">
                <img src="../../assets/posts-img/post-sample02.jpg" alt="投稿内容風景画像">
            </section>
            <section class="post__content__tagwrap">
                <div class="post__content__tagwrap__tag">
                    <img src="../../assets/posts-img/post-tag.svg" alt="タグのアイコン">
                    arashiyama
                </div>
                <div class="post__content__tagwrap__tag">
                    <img src="../../assets/posts-img/post-tag.svg" alt="タグのアイコン">
                    pansuki
                </div>
                <div class="post__content__tagwrap__tag">
                    <img src="../../assets/posts-img/post-tag.svg" alt="タグのアイコン">
                    rekishisuki
                </div>
            </section>
            <section class="post__content__btnwrap">
                <div class="post__content__btnwrap__btn">
                    <img src="../../assets/posts-img/post-like.svg" alt="">
                </div>
                <div class="post__content__btnwrap__btn">
                    <img src="../../assets/posts-img/post-favorite.svg" alt="">
                </div>
                <div class="post__content__btnwrap__btn">
                    <img src="../../assets/posts-img/post-share.svg" alt="">
                </div>
            </section>
            <section class="post__content__textwrap">
                <p class="post__content__textwrap__text">
                    今日は嵐山に旅行に来ました。一人の時間が好きだから<br>
                    たまには一人で旅行きちゃうんだよね^ ^
                </p>
            </section>
            <section class="post__content__hashtagwrap">
                <p class="post__content__hashtagwrap__hashtag">#旅行</p>
                <p class="post__content__hashtagwrap__hashtag">#歴史</p>
                <p class="post__content__hashtagwrap__hashtag">#雰囲気</p>
                <p class="post__content__hashtagwrap__hashtag">#嵐山</p>
            </section>
        </div>
    </div>
</template>

<script>
import FollowBtn from '../../components/UserPosts/followBtn.vue'
export default {
    components: {
        FollowBtn,
    }
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/post";
</style>