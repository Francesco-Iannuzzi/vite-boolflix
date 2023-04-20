<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { state } from "./state";
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      state
    };
  },
  mounted() {
  }
}
</script>

<template>
  <AppHeader />
  <!-- /searchBox -->
  <AppMain />
  <!-- /movie_list -->
</template>


<style lang="scss" scoped></style>
