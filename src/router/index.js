import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "@/views/Signin";
import Signup from "@/views/Signup";
import QuestionIndex from "@/views/questions/QuestionIndex";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Signin",
		component: Signin,
	},
	{
		path: "/Signup",
		name: "Signup",
		component: Signup,
	},
	{
		path: "/QuestionIndex",
		name: "QuestionIndex",
		component: QuestionIndex,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
