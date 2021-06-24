<template>
  <main class="flex-1 overflow-x-auto m-16">
    <LineChart
      v-if="hasItemSelected"
      :key="selectedAsset.asset.id"
      :selectedItem="selectedAsset"
    />
    <div class="m-auto text-center" v-if="!hasItemSelected">
      <span class="text-2xl">No asset selected</span>
      <p>You can select an asset in the menu on the left</p>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import LineChart from "../Chart.vue";

export default {
  name: "Main",
  components: { LineChart },
  computed: {
    ...mapGetters(["selectedAsset"]),
    hasItemSelected() {
      const data = Object.keys(
        (this.selectedAsset && this.selectedAsset.measurements) || [],
      );
      return data.length > 0 || false;
    },
  },
};
</script>
