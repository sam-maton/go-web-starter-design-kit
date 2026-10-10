import spriteUrl from "../../../sprite.svg?url&no-inline";

export default {
  title: "Elements/Link",
  tags: ["autodocs"],
  args: { text: "Home", href: "#", button: false, icon: false },
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    button: { control: "boolean", description: "Apply data-button styling." },
    icon: { control: "boolean", if: { arg: "button" } },
  },
  render: ({ text, href, button, icon }) => {
    const link = document.createElement("a");
    link.href = href;
    if (button) link.setAttribute("data-button", "");
    if (button && icon) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "24");
      svg.setAttribute("aria-hidden", "true");
      use.setAttribute("href", `${spriteUrl}#icon-home`);
      svg.append(use);
      link.append(svg);
    }
    link.append(document.createTextNode(text));
    return link;
  },
};

export const Default = {};