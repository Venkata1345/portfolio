import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { existsSync } from "node:fs";

/**
 * Resume presence check — logs a warning at dev/build time if /public/resume.pdf
 * is missing. Doesn't fail the build; the user knows the link will 404 until
 * the file is dropped in.
 */
function resumePresenceCheck() {
  const checkResume = () => {
    if (!existsSync("./public/resume.pdf")) {
      console.warn(
        "\n[resume-check] public/resume.pdf is missing — Hero secondaryCta (`/resume.pdf`) will 404. Drop the file before deploy.\n"
      );
    }
  };
  return {
    name: "resume-presence-check",
    hooks: {
      "astro:server:setup": checkResume,
      "astro:build:start": checkResume,
    },
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [resumePresenceCheck()],
});
