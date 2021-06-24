<template>
  <div class="h-screen overflow-hidden w-screen font-light">
    <Header />
    <div class="flex h-full w-full">
      <Sidebar />
      <Main />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Main from "./Main.vue";

export default {
  name: "Root",
  components: {
    Header,
    Sidebar,
    Main,
  },
};
</script>
