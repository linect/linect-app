<template>
	<div>
		<SearchHeader />
		<div class="ranking-wrap">
			<p class="ranking-wrap__type">タイプごとのユーザーランキング</p>
			<div class="ranking-wrap__items">
				<RankingType
					v-for="ranking in rankings"
					:key="ranking.id"
					:type="ranking.type"
					:src="ranking.src"
					:bgColor="ranking.bgColor"
				/>
			</div>
		</div>
		<div class="user-ranking">
			<p class="user-ranking__ttl">全体ユーザーランキング</p>
			<UserRankingItem
				v-for="user in users"
				:key="user.id"
				:name="user.name"
				:type="user.type"
				:rank="user.id"
				src="dummy.png"
			/>
		</div>
		<div class="genre-wrap">
			<p class="genre-wrap__ttl">ジャンルごとのユーザーランキング</p>
			<div class="genre-wrap__items">
				<GenreItem
					v-for="genre in genres"
					:key="genre.id"
					:genre="genre.genre"
					src="dummy.png"
					:bgColor="genre.bgColor"
				/>
			</div>
		</div>
		<div class="btn-wrap">
			<div class="btn-more">
				<button class="btn-more__txt">様々な投稿を見にいく</button>
			</div>
		</div>
		<GlobalNav/>
	</div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav.vue'
import UserRankingItem from "@/components/UserRankingItem.vue";
import RankingType from "@/components/RankingType.vue";
import GenreItem from "@/components/GenreItem.vue";
import SearchHeader from "@/components/SearchHeader.vue";
export default {
	components: {
		GlobalNav,
		UserRankingItem,
		RankingType,
		GenreItem,
		SearchHeader,
	},
	data() {
		return {
			users: [
				{ id: 1, name: "onakasuita", type: "ユリ" },
				{ id: 2, name: "gohantabetai", type: "カスミ" },
				{ id: 3, name: "sushilove", type: "ユリ" },
				{ id: 4, name: "nikulove", type: "ユリ" },
				{ id: 5, name: "hayaokinigate", type: "ユリ" },
			],
			rankings: [
				{ id: 1, type: "サクラ", src: "search-type-img-01.png", bgColor: "#FFDDDE" },
				{ id: 2, type: "スミレ", src: "search-type-img-02.png", bgColor: "#D8CCFA" },
				{ id: 3, type: "ヒマワリ", src: "search-type-img-03.png", bgColor: "#FAEA98" },
				{ id: 4, type: "アジサイ", src: "search-type-img-04.png", bgColor: "#D1F6FF" },
				{ id: 5, type: "ハイビスカス", src: "search-type-img-05.png", bgColor: "#FAD0DD" },
				{ id: 6, type: "ラベンダー", src: "search-type-img-06.png", bgColor: "#D1D8FF" },
				{ id: 7, type: "パンジー", src: "search-type-img-07.png", bgColor: "#FDF1B3" },
				{ id: 8, type: "アサガオ", src: "search-type-img-08.png", bgColor: "#C3DCFF" },
				{ id: 9, type: "チューリップ", src: "search-type-img-09.png", bgColor: "#FADADD" },
			],
			genres: [
				{ id: 1, genre: "ファッション", bgColor: "#F4C6B5" },
				{ id: 1, genre: "ビューティー", bgColor: "#FFB6B9" },
				{ id: 1, genre: "グルメ", bgColor: "#F76464" },
				{ id: 1, genre: "ダイエット", bgColor: "#FFDEB1" },
				{ id: 1, genre: "旅行・観光", bgColor: "#F4A486" },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.ranking-wrap {
	width: 100%;
	padding-top: 40px;
	&__type {
		font-size: 14px;
		margin-left: 16px;
	}
	&__items {
		display: flex;
		width: 100%;
		overflow-x: scroll;
		padding-right: 16px;
	}
}

.user-ranking {
	width: 100%;
	margin-top: 40px;
	padding-left: 16px;
	&__ttl {
		font-size: 14px;
		margin-bottom: 24px;
	}
}

.genre-wrap {
	width: 100%;
	margin-top: 40px;
	margin-bottom: 34px;
	padding: 0 16px;
	&__ttl {
		font-size: 14px;
		margin-bottom: 24px;
	}
	&__items {
		display: flex;
		width: 100%;
		overflow-x: scroll;
		gap: 16px;
	}
}

.btn-wrap {
	width: 100%;
	height: 112px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn-more {
	width: 150px;
	height: 32px;
	border-radius: 4px;
	border: solid 1px #707070;
	&__txt {
		font-size: 10px;
		color: #030303;
		display: block;
		width: 100%;
		height: 100%;
	}
}
</style>
