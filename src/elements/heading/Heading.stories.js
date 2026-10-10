export default {
  title: "Elements/Heading",
  tags: ["autodocs"],
  args: { highlight: false },
  argTypes: {
    highlight: { control: "boolean" },
  },
  render: ({ highlight }) => {
    const container = document.createElement("div");
    for (const level of [1, 2, 3, 4, 5, 6]) {
      const heading = document.createElement(`h${level}`);
      heading.textContent = `Heading ${level}`;
      if (highlight) heading.setAttribute("data-highlight", "");
      container.append(heading);
    }
    return container;
  },
};

export const Default = {};