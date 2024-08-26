import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        xs: {
          name: "xs",
          styles: {
            width: "375px",
            height: "724px",
          },
        },
        sm: {
          name: "sm",
          styles: {
            width: "576px",
            height: "531px",
          },
        },
        md: {
          name: "md",
          styles: {
            width: "768px",
            height: "956px",
          },
        },
        lg: {
          name: "lg",
          styles: {
            width: "1024px",
            height: "735px",
          },
        },
        xl: {
          name: "xl",
          styles: {
            width: "1440px",
            height: "735px",
          },
        },
        "2xl": {
          name: "2xl",
          styles: {
            width: "1920px",
            height: "967px",
          },
        },
        "3xl": {
          name: "3xl",
          styles: {
            width: "2560px",
            height: "980px",
          },
        },
      },
    },
  },
};

export default preview;
