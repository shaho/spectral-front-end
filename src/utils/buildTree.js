export const buildTree = (children, parentId = null) => {
  const dataset = children
    .filter((child) => {
      return child.parentId === parentId;
    })
    .map((child) => {
      return {
        ...child,
        children: buildTree(children, child.id),
      };
    });
  return dataset;
};
