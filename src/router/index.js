import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "@/components/Signin";
import Signup from "@/components/Signup";
import Firstview from "@/views/Firstview";
import DiagnosisSakura from "@/views/DiagnosisSakura";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Firstview",
    component: Firstview,
  },
  {
    path: "/DiagnosisSakura",
    name: "DiagnosisSakura",
    component: DiagnosisSakura,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
