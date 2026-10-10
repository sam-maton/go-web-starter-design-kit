export default {
  title: "Elements/Pre",
  tags: ["autodocs"],
  args: { text: "Hello, world!\n  Preformatted text" },
  argTypes: { text: { control: "text" } },
  render: ({ text }) => {
    const pre = document.createElement("pre");
    pre.textContent = text;
    return pre;
  },
};

export const Default = {};