import LineChart from "../components/Chart.vue";
import measurements from "../mock-data/measurements.json";

export default {
  title: "Example/Chart",
  component: LineChart,
  argTypes: {
    selectedItem: {
      measurements: [],
      asset: "",
    },
  },
};

const getAsset = (assetId) => {
  return measurements.find((item) => item.assetId === assetId);
};

const getAssetData = (assetId) => {
  const foundItem = getAsset(assetId);
  return {
    name: assetId,
    data: Object.values(
      JSON.parse(JSON.stringify(Object.entries(foundItem.measurements))),
    ).map((i) => i[1]),
    labels: Object.keys(foundItem.measurements).map((dt) =>
      new Date(dt).toLocaleString("default", { month: "long" }),
    ),
  };
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LineChart },
  template: '<LineChart v-bind="$props" />',
});

export const Asset0 = Template.bind({});
const assets0 = getAsset(0);
Asset0.args = {
  selectedItem: {
    measurements: assets0.measurements,
    asset: {},
  },
};

export const Asset2 = Template.bind({});
const assets2 = getAsset(2);
Asset2.args = {
  selectedItem: {
    measurements: assets2.measurements,
    asset: {},
  },
};

export const Asset4 = Template.bind({});
const assets4 = getAsset(4);
Asset4.args = {
  selectedItem: {
    measurements: assets4.measurements,
    asset: {},
  },
};
