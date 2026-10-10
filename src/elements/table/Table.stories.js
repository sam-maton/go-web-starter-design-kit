export default {
  title: "Elements/Table",
  tags: ["autodocs"],
  args: { caption: "Planet diameters", rows: 2, rowHeaders: true },
  argTypes: {
    caption: { control: "text" },
    rows: { control: { type: "number", min: 1, max: 3 } },
    rowHeaders: { control: "boolean" },
  },
  render: ({ caption, rows, rowHeaders }) => {
    const table = document.createElement("table");
    if (caption) {
      const title = document.createElement("caption");
      title.textContent = caption;
      table.append(title);
    }
    const head = document.createElement("thead");
    const heading = document.createElement("tr");
    for (const text of ["Name", "Diameter (km)"]) {
      const cell = document.createElement("th");
      cell.scope = "col";
      cell.textContent = text;
      heading.append(cell);
    }
    head.append(heading);
    const body = document.createElement("tbody");
    for (const [name, diameter] of [["Mercury", "4,879"], ["Venus", "12,104"], ["Earth", "12,756"]].slice(0, rows)) {
      const row = document.createElement("tr");
      const label = document.createElement(rowHeaders ? "th" : "td");
      if (rowHeaders) label.scope = "row";
      label.textContent = name;
      const cell = document.createElement("td");
      cell.textContent = diameter;
      row.append(label, cell);
      body.append(row);
    }
    table.append(head, body);
    return table;
  },
};

export const Default = {};