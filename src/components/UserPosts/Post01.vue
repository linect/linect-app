<template>
    <div class="post">
        <div class="post__user">
            <div class="post__user__img">
                <img src="../../assets/posts-img/icon-img.png" alt="人物画像">
            </div>
            <p class="post__user__name">onakasuita_1129</p>
            <div class="post__user__flower">
                <img src="../../assets/posts-img/post-sunflower.png" alt="">
            </div>
            <FollowBtn/>
        </div>
        <div class="post__content">
            <section class="post__content__img">
                <img src="../../assets/posts-img/post-sample01.jpg" alt="投稿内容人物画像">
            </section>
            <section class="post__content__tagwrap">
                <div class="post__content__tagwrap__tag">
                    <img src="../../assets/posts-img/post-tag.svg" alt="タグのアイコン">
                    Yakinikutabetai
                </div>
                <div class="post__content__tagwrap__tag">
                    <img src="../../assets/posts-img/post-tag.svg" alt="タグのアイコン">
                    gohankure
                </div>
                <div class="post__content__tagwrap__tag">
                    <img src="../../assets/posts-img/post-tag.svg" alt="タグのアイコン">
                    Sushisuki
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
                    最近梅田で買ったアウター!<br>
                    メッチャ暖かくて可愛い!
                </p>
            </section>
            <section class="post__content__hashtagwrap">
                <p class="post__content__hashtagwrap__hashtag">#ファッション</p>
                <p class="post__content__hashtagwrap__hashtag">#お洒落</p>
                <p class="post__content__hashtagwrap__hashtag">#雰囲気</p>
                <p class="post__content__hashtagwrap__hashtag">#大阪</p>
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