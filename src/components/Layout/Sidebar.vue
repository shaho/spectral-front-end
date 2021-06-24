<template>
  <section class="h-full w-72 bg-gray-800">
    <Tree :assets="assets" :depth="0" />
  </section>
</template>

<script>
import assets from "../../mock-data/assets.json";
import Tree from "../Tree.vue";
import { buildTree } from "../../utils/buildTree";

export default {
  name: "Sidebar",
  components: { Tree },
  data() {
    const tree = buildTree(assets);
    return {
      assets: {
        name: "",
        children: tree,
      },
    };
  },
};
</script>
