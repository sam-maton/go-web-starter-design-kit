import "../variables.css";
import "../elements.css";

export default {
  globalTypes: {
    theme: {
      description: "Color scheme",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "auto", title: "System" },
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "auto" },
  decorators: [
    (Story, context) => {
      if (context.globals.theme === "auto") {
        delete document.documentElement.dataset.theme;
      } else {
        document.documentElement.dataset.theme = context.globals.theme;
      }

      return Story();
    },
  ],
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
  },
};