import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "Dagelijkse kost Design System"
});

addons.setConfig({
  panelPosition: "bottom",
  theme
});
