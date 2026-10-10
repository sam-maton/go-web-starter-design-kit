let dialogCount = 0;

export default {
  title: "Elements/Dialog",
  tags: ["autodocs"],
  args: { text: "This is a dialog.", mode: "modal" },
  argTypes: {
    text: { control: "text" },
    mode: { control: "radio", options: ["modal", "popover"] },
  },
  render: ({ text, mode }) => {
    const container = document.createElement("div");
    const open = document.createElement("button");
    const dialog = document.createElement("dialog");
    dialog.id = `dialog-${++dialogCount}`;
    dialog.setAttribute("aria-label", mode === "popover" ? "Popover" : "Dialog");
    const content = document.createElement("p");
    content.textContent = text;
    const close = document.createElement("button");
    close.textContent = "Close";
    if (mode === "popover") {
      open.textContent = "Open popover";
      dialog.setAttribute("popover", "");
      open.setAttribute("popovertarget", dialog.id);
      close.setAttribute("popovertarget", dialog.id);
      close.setAttribute("popovertargetaction", "hide");
    } else {
      open.textContent = "Open dialog";
      open.setAttribute("command", "show-modal");
      open.setAttribute("commandfor", dialog.id);
      close.setAttribute("command", "close");
      close.setAttribute("commandfor", dialog.id);
    }
    dialog.append(content, close);
    container.append(open, dialog);
    return container;
  },
};

export const Default = {};