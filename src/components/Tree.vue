<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<template>
  <ul class="w-full text-2xl text-white">
    <li
      @click="setSelectedAsset(assets)"
      v-if="assets.name"
      class="pl-8 h-16 flex items-center hover:bg-blue-800 cursor-pointer"
      :style="[
        ![0, 1].includes(depth) && { 'padding-left': depth * 20 + 'px' },
        {},
      ]"
    >
      <span v-if="assets.children.length === 0" class="w-4 h-4"></span>
      <Icons :expnded="expanded" :childLength="assets.children.length" />
      <span class="ml-2">{{ assets.name }}</span>
    </li>

    <Tree
      v-if="expanded"
      v-for="asset in assets.children"
      v-bind:key="asset.id"
      :assets="asset"
      :depth="depth + 1"
    />
  </ul>
</template>

<script>
import Icons from "./Icons";
import measurements from "../mock-data/measurements.json";

export default {
  name: "Tree",
  props: ["assets", "depth"],

  components: { Icons },
  data() {
    return {
      expanded: true,
    };
  },

  methods: {
    setSelectedAsset(asset) {
      this.expanded = !this.expanded;

      const foundItem = measurements.find((item) => {
        return item.assetId === asset.id;
      });
      this.$store.commit("setSelectedAsset", {
        asset,
        measurements: (foundItem && foundItem.measurements) || [],
      });
    },
  },
};
</script>
