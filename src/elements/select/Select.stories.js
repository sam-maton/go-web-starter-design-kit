export default {
  title: "Elements/Select",
  tags: ["autodocs"],
  args: { label: "Select an option", multiple: false, value: "Option 1", disabled: false, invalid: false },
  argTypes: {
    label: { control: "text" },
    multiple: { control: "boolean" },
    value: { control: "select", options: ["Option 1", "Option 2", "Option 3"], if: { arg: "multiple", truthy: false } },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: ({ label, multiple, value, disabled, invalid }) => {
    const field = document.createElement("label");
    field.textContent = `${label} `;
    const select = document.createElement("select");
    select.multiple = multiple;
    select.disabled = disabled;
    if (invalid) select.setAttribute("aria-invalid", "true");
    for (const text of ["Option 1", "Option 2", "Option 3"]) {
      const option = document.createElement("option");
      option.textContent = text;
      option.defaultSelected = text === value;
      select.append(option);
    }
    field.append(select);
    return field;
  },
};

export const Default = {};