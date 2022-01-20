import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "@/views/Signin";
import Signup from "@/views/Signup";
import QuestionTtl from "@/views/questions/QuestionTtl";
import QuestionAnimal from "@/views/questions/QuestionAnimal";
import QuestionFruit from "@/views/questions/QuestionFruit";
import QuestionResult from "@/views/questions/QuestionResult";
import DiagnosisSakura from "@/views/DiagnosisSakura";
import DiagnosisSumire from "@/views/DiagnosisSumire";
import DiagnosisHimawari from "@/views/DiagnosisHimawari";
import DiagnosisAzisai from "@/views/DiagnosisAzisai";
import DiagnosisHaibisukasu from "@/views/DiagnosisHaibisukasu";
import DiagnosisRabennda from "@/views/DiagnosisRabennda";
import DiagnosisPanzi from "@/views/DiagnosisPanzi";
import DiagnosisAsagao from "@/views/DiagnosisAsagao";
import DiagnosisTyuripu from "@/views/DiagnosisTyuripu";
import DiagnosisEnd from "@/views/DiagnosisEnd";
import CategoryType from "@/views/CategoryType";
import Home from '@/views/Home';
import User from '@/views/User';
import SearchPage from "@/views/SearchPage";
import SearchPageRecommend from "@/views/SearchPageRecommend";
import CategoryGenre from "@/views/CategoryGenre";
import CategoryFashion from "@/views/CategoryFashion";
Vue.use(VueRouter);

const displayPath = "/ecc/hisimaru/works/linect/";
// グローバル
const routes = [
  {
    path: displayPath,
    name: "Signin",
    component: Signin,
  },
  {
    path: displayPath+"Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: displayPath+"QuestionTtl",
    name: "QuestionTtl",
    component: QuestionTtl,
  },
  {
    path: displayPath+"QuestionAnimal",
    name: "QuestionAnimal",
    component: QuestionAnimal,
  },
  {
    path: displayPath+"QuestionFruit",
    name: "QuestionFruit",
    component: QuestionFruit,
  },
  {
    path: displayPath+"QuestionResult",
    name: "QuestionResult",
    component: QuestionResult,
  },
  {
    path: displayPath+"DiagnosisSakura",
    name: "DiagnosisSakura",
    component: DiagnosisSakura,
  },
  {
    path: displayPath+"DiagnosisSumire",
    name: "DiagnosisSumire",
    component: DiagnosisSumire,
  },
  {
    path: displayPath+"DiagnosisHimawari",
    name: "DiagnosisHimawari",
    component: DiagnosisHimawari,
  },
  {
    path: displayPath+"DiagnosisAzisai",
    name: "DiagnosisAzisai",
    component: DiagnosisAzisai,
  },
  {
    path: displayPath+"DiagnosisHaibisukasu",
    name: "DiagnosisHaibisukasu",
    component: DiagnosisHaibisukasu,
  },
  {
    path: displayPath+"DiagnosisRabennda",
    name: "DiagnosisRabennda",
    component: DiagnosisRabennda,
  },
  {
    path: displayPath+"DiagnosisAsagao",
    name: "DiagnosisAsagao",
    component: DiagnosisAsagao,
  },
  {
    path: displayPath+"DiagnosisPanzi",
    name: "DiagnosisPanzi",
    component: DiagnosisPanzi,
  },
  {
    path: displayPath+"DiagnosisTyuripu",
    name: "DiagnosisTyuripu",
    component: DiagnosisTyuripu,
  },
  {
    path: displayPath+"DiagnosisEnd",
    name: "DiagnosisEnd",
    component: DiagnosisEnd,
  },
  {
    path: displayPath+"CategoryType",
    name: "CategoryType",
    component: CategoryType,
  },
  {
    path: displayPath+"CategoryGenre",
    name: "CategoryGenre",
    component: CategoryGenre,
  },
  {
    path: displayPath+"CategoryFashion",
    name: "CategoryFashion",
    component: CategoryFashion,
  },
  {
    path: displayPath+"Home",
    name: "Home",
    component: Home,
  },
  {
    path: displayPath+"User",
    name: "User",
    component: User,
  },
  {
		path: displayPath+"SearchPage",
		name: "SearchPage",
		component: SearchPage,
	},
	{
		path: displayPath+"SearchPageRecommend",
		name: "SearchPageRecommend",
		component: SearchPageRecommend,
	},
  {
    path: displayPath+"CategoryGenre",
    name: "CategoryGenre",
    component: CategoryGenre,
  },
  {
    path: displayPath+"CategoryFashion",
    name: "CategoryFashion",
    component: CategoryFashion,
  },
];

//ローカル
// const routes = [
//   {
//     path: "/",
//     name: "Signin",
//     component: Signin,
//   },
//   {
//     path: "/Signup",
//     name: "Signup",
//     component: Signup,
//   },
//   {
//     path: "/QuestionTtl",
//     name: "QuestionTtl",
//     component: QuestionTtl,
//   },
//   {
//     path: "/QuestionAnimal",
//     name: "QuestionAnimal",
//     component: QuestionAnimal,
//   },
//   {
//     path: "/QuestionFruit",
//     name: "QuestionFruit",
//     component: QuestionFruit,
//   },
//   {
//     path: "/QuestionResult",
//     name: "QuestionResult",
//     component: QuestionResult,
//   },
//   {
//     path: "/DiagnosisSakura",
//     name: "DiagnosisSakura",
//     component: DiagnosisSakura,
//   },
//   {
//     path: "/DiagnosisSumire",
//     name: "DiagnosisSumire",
//     component: DiagnosisSumire,
//   },
//   {
//     path: "/DiagnosisHimawari",
//     name: "DiagnosisHimawari",
//     component: DiagnosisHimawari,
//   },
//   {
//     path: "/DiagnosisAzisai",
//     name: "DiagnosisAzisai",
//     component: DiagnosisAzisai,
//   },
//   {
//     path: "/DiagnosisHaibisukasu",
//     name: "DiagnosisHaibisukasu",
//     component: DiagnosisHaibisukasu,
//   },
//   {
//     path: "/DiagnosisRabennda",
//     name: "DiagnosisRabennda",
//     component: DiagnosisRabennda,
//   },
//   {
//     path: "/DiagnosisAsagao",
//     name: "DiagnosisAsagao",
//     component: DiagnosisAsagao,
//   },
//   {
//     path: "/DiagnosisPanzi",
//     name: "DiagnosisPanzi",
//     component: DiagnosisPanzi,
//   },
//   {
//     path: "/DiagnosisTyuripu",
//     name: "DiagnosisTyuripu",
//     component: DiagnosisTyuripu,
//   },
//   {
//     path: "/DiagnosisEnd",
//     name: "DiagnosisEnd",
//     component: DiagnosisEnd,
//   },
//   {
//     path: "/CategoryType",
//     name: "CategoryType",
//     component: CategoryType,
//   },
//   {
//     path: "/CategoryGenre",
//     name: "CategoryGenre",
//     component: CategoryGenre,
//   },
//   {
//     path: "/CategoryFashion",
//     name: "CategoryFashion",
//     component: CategoryFashion,
//   },
//   {
//     path: "/Home",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/User",
//     name: "User",
//     component: User,
//   },
//   {
// 		path: "/SearchPage",
// 		name: "SearchPage",
// 		component: SearchPage,
// 	},
// 	{
// 		path: "/SearchPageRecommend",
// 		name: "SearchPageRecommend",
// 		component: SearchPageRecommend,
// 	},
//   {
//     path: "/CategoryGenre",
//     name: "CategoryGenre",
//     component: CategoryGenre,
//   },
//   {
//     path: "/CategoryFashion",
//     name: "CategoryFashion",
//     component: CategoryFashion,
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
