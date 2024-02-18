const useSections = () => {
  const insertNewSection = (tree, id, item) => {
    if (tree.id === id) {
      tree.sections.push({
        id: new Date().getTime(),
        title: item,
        sections: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.sections.map((ob) => {
      return insertNewSection(ob, id, item);
    });

    return { ...tree, sections: latestNode };
  };

  const deleteSection = (tree, id) => {
    for (let i = 0; i < tree.sections.length; i++) {
      const currentItem = tree.sections[i];
      if (currentItem.id === id) {
        tree.sections.splice(i, 1);
        return tree;
      } else {
        deleteSection(currentItem, id);
      }
    }
    return tree;
  };

  return { insertNewSection, deleteSection };
};

export default useSections;
