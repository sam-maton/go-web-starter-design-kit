export default {
  title: "Elements/Checkbox",
  tags: ["autodocs"],
  args: { label: "Apple", checked: false, disabled: false },
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ label, checked, disabled }) => {
    const field = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked;
    input.disabled = disabled;
    field.append(input, document.createTextNode(` ${label}`));
    return field;
  },
};

export const Default = {};