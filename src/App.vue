<template>
  <SideBar v-if="userObj" />
  <RouterView />
  <!-- <GlobalMessage /> -->
</template>

<script>
import { computed, onMounted } from "vue";
import LandingPage from "./components/icons/LandingPage.vue";
import LandingPage2 from "./components/LandingPage2.vue";
import LandingPageCT from "./components/LandingPageCT.vue";
import GlobalMessage from "./components/GlobalMessage.vue";
import SideBar from "./components/SideBar.vue";
import { useMessageStore } from "@/messageInterval";
import { useUserData } from "./localstorage";

export default {
  components: {
    LandingPage,
    LandingPage2,
    LandingPageCT,
    GlobalMessage,
    SideBar,
  },
  setup() {
    const messageStore = useMessageStore();
    const user = useUserData();

    // Computed makes sidebar reactive to login/logout/expiry
    const userObj = computed(() => user.user.value);

    onMounted(() => {
      messageStore.startAutoMessage("got Bored? Let's look at some Jokes!", 100000);
      user.initializeUser(); // Loads user if already logged in
    });

    return { userObj };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
