import "../index.css";
import Tree from "../components/Tree.vue";
import assets from "../mock-data/assets.json";
import { buildTree } from "../utils/buildTree";

const tree = buildTree(assets);

export default {
  title: "Example/Tree",
  component: Tree,
  argTypes: {
    assets: {
      name: "",
      children: [],
    },
    depth: 0,
    fireEvent: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tree },
  template: '<div class="bg-gray-400"><Tree v-bind="$props" /></div>',
});

export const Treeview = Template.bind({});

Treeview.args = {
  assets: {
    name: "",
    children: tree,
  },
  depth: 0,
  fireEvent: false,
};
