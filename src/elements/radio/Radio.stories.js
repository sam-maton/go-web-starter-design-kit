let groupCount = 0;

export default {
  title: "Elements/Radio",
  tags: ["autodocs"],
  args: { legend: "Select a drone", value: "Huey", disabled: false },
  argTypes: {
    legend: { control: "text" },
    value: { control: "radio", options: ["Huey", "Dewey", "Louie"] },
    disabled: { control: "boolean" },
  },
  render: ({ legend, value, disabled }) => {
    const fieldset = document.createElement("fieldset");
    fieldset.disabled = disabled;
    const title = document.createElement("legend");
    title.textContent = legend;
    fieldset.append(title);
    const name = `drone-${++groupCount}`;
    for (const text of ["Huey", "Dewey", "Louie"]) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = name;
      input.value = text;
      input.defaultChecked = text === value;
      label.append(input, document.createTextNode(` ${text} `));
      fieldset.append(label);
    }
    return fieldset;
  },
};

export const Default = {};