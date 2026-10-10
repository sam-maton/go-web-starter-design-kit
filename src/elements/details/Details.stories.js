export default {
  title: "Elements/Details",
  tags: ["autodocs"],
  args: { summary: "Graduation requirements", text: "Requires 40 credits and a passing grade in health.", open: false },
  argTypes: {
    summary: { control: "text" },
    text: { control: "text" },
    open: { control: "boolean" },
  },
  render: ({ summary, text, open }) => {
    const details = document.createElement("details");
    details.open = open;
    const heading = document.createElement("summary");
    heading.textContent = summary;
    const content = document.createElement("p");
    content.textContent = text;
    details.append(heading, content);
    return details;
  },
};

export const Default = {};