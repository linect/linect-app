import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "@/components/Signin";
import Signup from "@/components/Signup";
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
