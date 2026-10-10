export default {
  title: "Elements/Textarea",
  tags: ["autodocs"],
  args: { label: "Description", value: "", rows: 5, disabled: false, invalid: false },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    rows: { control: { type: "number", min: 1, max: 10 } },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: ({ label, value, rows, disabled, invalid }) => {
    const field = document.createElement("label");
    field.textContent = `${label} `;
    const textarea = document.createElement("textarea");
    textarea.textContent = value;
    textarea.rows = rows;
    textarea.disabled = disabled;
    if (invalid) textarea.setAttribute("aria-invalid", "true");
    field.append(textarea);
    return field;
  },
};

export const Default = {};