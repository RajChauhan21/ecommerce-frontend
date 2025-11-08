import { createRouter, createWebHistory } from "vue-router";
import LandingPageCT from "@/components/LandingPageCT.vue";
import Login from "@/components/Login.vue";
import Categories from "@/components/Categories.vue";
import SignUp from "@/components/SignUp.vue";
import ClothesPageNew from "@/components/ClothesPageNew.vue";
import HouseHoldPageNew from "@/components/HouseHoldPageNew.vue";
import HomeAppliancesPageNew from "@/components/HomeAppliancesPageNew.vue";
import Cart from "@/components/Cart.vue";
import Jokes from "@/components/Jokes.vue";
import BillingPage from "@/components/BillingPage.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import LandingPage2 from "@/components/LandingPage2.vue";
import HomePage from "@/components/HomePage.vue";
import UserProfile from "@/components/UserProfile.vue";
import OrderHistory from "@/components/OrderHistory.vue";
const routes = [
  {
    path: "/profile",
    name: "profile",
     meta: { requiresAuth: true },
    component: UserProfile,
  },
  {
    path: "/history",
    name: "history",
     meta: { requiresAuth: true },
    component: OrderHistory,
  },
  {
    path: "/home",
    name: "HomePage",
    meta: { requiresAuth: true },
    component: HomePage,
  },
  {
    path: "/",
    name: "land",
    component: LandingPage2,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/category",
    name: "category",
    meta: { requiresAuth: true },
    component: Categories,
  },
  {
    path: "/cart",
    name: "cart",
    meta: { requiresAuth: true },
    component: Cart,
  },
  {
    path: "/jokes",
    name: "jokes",
    meta: { requiresAuth: true },
    component: Jokes,
  },
  {
    path: "/billing",
    name: "billing",
    meta: { requiresAuth: true },
    component: BillingPage,
  },
  {
    path: "/appliancesnew",
    name: "appliances",
    meta: { requiresAuth: true },
    component: HomeAppliancesPageNew,
  },
  {
    path: "/clothesnew",
    name: "clothesnew",
    meta: { requiresAuth: true },
    component: ClothesPageNew,
  },
  {
    path: "/householdnew",
    name: "householdnew",
    meta: { requiresAuth: true },
    component: HouseHoldPageNew,
  },

  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (to.meta.requiresAuth && !user ) {
    next({ name: "login" });
  } else if (to.name === "login" && user) {
    next({ name: "HomePage" });
  } else {
    next();
  }
});

export default router;
