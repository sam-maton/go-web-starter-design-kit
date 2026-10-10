export default {
  title: "Elements/Output",
  tags: ["autodocs"],
  args: { text: "Your changes have been saved.", tone: "info", banner: false },
  argTypes: {
    text: { control: "text" },
    tone: { control: "radio", options: ["info", "warning", "error", "success"] },
    banner: { control: "boolean" },
  },
  render: ({ text, tone, banner }) => {
    const output = document.createElement("output");
    output.setAttribute(`data-${tone}${banner ? "-banner" : ""}`, "");
    output.textContent = text;
    return output;
  },
};

export const Default = {};