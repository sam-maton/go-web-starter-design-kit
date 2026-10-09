import { fn } from "storybook/test";
import spriteUrl from "../sprite.svg?url&no-inline";

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
    icon: "none",
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
      control: "select",
      options: [
        "none",
        "icon-home",
        "icon-menu",
        "icon-close",
        "icon-buttons",
        "icon-light-dark",
        "icon-typography",
        "icon-form-elements",
        "icon-notifications",
        "icon-table",
        "icon-box",
      ],
      description: "Symbol from sprite.svg; icon-only buttons default to menu.",
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

    if (!disabled) {
      button.classList.add(...states[state]);

      if (state === "focus-visible") {
        button.style.outlineStyle = "auto";
      }
    }

    const iconId = icon === "none" && variant === "icon" ? "icon-menu" : icon;

    if (iconId !== "none") {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      const size = variant === "icon" ? "24" : "20";

      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      svg.style.flexShrink = "0";
      use.setAttribute("href", `${spriteUrl}#${iconId}`);
      use.setAttribute("width", "24");
      use.setAttribute("height", "24");
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

export const Solid = {};

export const Text = { args: { variant: "text" } };

export const Outline = { args: { variant: "outline" } };

export const Icon = {
  args: { variant: "icon", icon: "icon-menu", label: "Open menu" },
};

export const WithIcon = { args: { icon: "icon-home", label: "Home" } };

export const Hover = { args: { state: "hover" } };

export const Active = { args: { state: "active" } };

export const FocusVisible = { args: { state: "focus-visible" } };

export const Disabled = { args: { disabled: true } };