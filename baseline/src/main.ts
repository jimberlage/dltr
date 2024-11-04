import { plugin as PrefectDesign } from "@prefecthq/prefect-design";
import { plugin as PrefectUILibrary } from "@prefecthq/prefect-ui-library";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// styles
import "@prefecthq/prefect-design/dist/style.css";
import "@prefecthq/prefect-ui-library/dist/style.css";

function start(): void {
  const app = createApp(App);

  app.use(PrefectDesign);
  app.use(PrefectUILibrary);

  app.mount("#app");
}

start();
