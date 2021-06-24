<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    selectedItem: {
      type: Object,
      default: () => ({
        measurements: [],
        asset: "",
      }),
    },
  },
  mounted() {
    const { measurements, asset } = this.selectedItem;

    if (!measurements) return;

    const labels = Object.keys(measurements).map((dt) => {
      return new Date(dt).toLocaleString("default", { month: "long" });
    });

    this.renderChart(
      {
        labels,
        datasets: [
          {
            label: asset.name,
            data: Object.values(
              JSON.parse(JSON.stringify(Object.entries(measurements))),
            ).map((i) => i[1]),
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      },
    );
  },
};
</script>
