import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "@/views/Signin";
import Signup from "@/views/Signup";
import QuestionIndex from "@/views/questions/QuestionIndex";
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
  {
    path: "/DiagnosisSakura",
    name: "DiagnosisSakura",
    component: DiagnosisSakura,
  },
  {
    path: "/DiagnosisSumire",
    name: "DiagnosisSumire",
    component: DiagnosisSumire,
  },
  {
    path: "/DiagnosisHimawari",
    name: "DiagnosisHimawari",
    component: DiagnosisHimawari,
  },
  {
    path: "/DiagnosisAzisai",
    name: "DiagnosisAzisai",
    component: DiagnosisAzisai,
  },
  {
    path: "/DiagnosisHaibisukasu",
    name: "DiagnosisHaibisukasu",
    component: DiagnosisHaibisukasu,
  },
  {
    path: "/DiagnosisRabennda",
    name: "DiagnosisRabennda",
    component: DiagnosisRabennda,
  },
  {
    path: "/DiagnosisAsagao",
    name: "DiagnosisAsagao",
    component: DiagnosisAsagao,
  },
  {
    path: "/DiagnosisPanzi",
    name: "DiagnosisPanzi",
    component: DiagnosisPanzi,
  },
  {
    path: "/DiagnosisTyuripu",
    name: "DiagnosisTyuripu",
    component: DiagnosisTyuripu,
  },
  {
    path: "/DiagnosisEnd",
    name: "DiagnosisEnd",
    component: DiagnosisEnd,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
