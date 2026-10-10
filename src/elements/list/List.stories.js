export default {
  title: "Elements/List",
  tags: ["autodocs"],
  args: { items: ["First item", "Second item", "Third item"], ordered: false, navigation: false },
  argTypes: {
    items: { control: "object" },
    ordered: { control: "boolean" },
    navigation: { control: "boolean" },
  },
  render: ({ items, ordered, navigation }) => {
    const list = document.createElement(ordered ? "ol" : "ul");
    for (const text of items) {
      const item = document.createElement("li");
      if (navigation) {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = text;
        item.append(link);
      } else {
        item.textContent = text;
      }
      list.append(item);
    }
    if (!navigation) return list;
    const nav = document.createElement("nav");
    nav.append(list);
    return nav;
  },
};

export const Default = {};