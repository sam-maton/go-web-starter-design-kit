import { fn } from "storybook/test";
import spriteUrl from "../../../sprite.svg?url&no-inline";

const states = {
  resting: [],
  hover: ["pseudo-hover"],
  active: ["pseudo-hover", "pseudo-active"],
  "focus-visible": ["pseudo-focus-visible"],
};

export default {
  title: "Elements/Button",
  tags: ["autodocs"],
  args: {
    label: "Button",
    variant: "solid",
    state: "resting",
    disabled: false,
    icon: false,
    onClick: fn(),
  },
  argTypes: {
    label: { control: "text", description: "Text or accessible icon label." },
    variant: {
      control: "radio",
      options: ["solid", "text", "outline", "icon"],
      description: "Solid, data-text, data-outline, or data-icon styling.",
    },
    state: {
      control: "select",
      options: Object.keys(states),
      description: "Pin a CSS interaction state; native interactions still work.",
    },
    disabled: { control: "boolean", description: "Native disabled attribute." },
    icon: {
      control: "boolean",
      if: { arg: "variant", neq: "icon" },
      description: "Show or hide the home icon from sprite.svg.",
    },
    onClick: { control: false, table: { disable: true } },
  },
  render: ({ label, variant, state, disabled, icon, onClick }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = disabled;

    if (variant !== "solid") {
      button.setAttribute(`data-${variant}`, "");
    }

    if (!disabled && state !== "resting") {
      button.classList.add(...states[state]);

      if (state === "focus-visible") {
        button.style.outlineStyle = "auto";
      }
    }

    if (icon || variant === "icon") {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      const size = variant === "icon" ? "24" : "20";

      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.setAttribute("aria-hidden", "true");
      use.setAttribute("href", `${spriteUrl}#icon-home`);
      svg.append(use);
      button.append(svg);
    }

    if (variant === "icon") {
      button.setAttribute("aria-label", label || "Button");
      button.title = label || "Button";
    } else {
      button.append(document.createTextNode(label));
    }

    button.addEventListener("click", onClick);
    return button;
  },
};

export const Default = {};