import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
      });
    },
  },
});
