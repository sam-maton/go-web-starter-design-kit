export default {
  title: "Elements/Input",
  tags: ["autodocs"],
  args: { label: "User name", type: "text", value: "", disabled: false, invalid: false },
  argTypes: {
    label: { control: "text" },
    type: { control: "radio", options: ["text", "email"] },
    value: { control: "text" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean", description: "Apply aria-invalid validation styling." },
  },
  render: ({ label, type, value, disabled, invalid }) => {
    const field = document.createElement("label");
    field.textContent = `${label} `;
    const input = document.createElement("input");
    input.type = type;
    if (value) input.defaultValue = value;
    input.disabled = disabled;
    if (invalid) input.setAttribute("aria-invalid", "true");
    field.append(input);
    return field;
  },
};

export const Default = {};