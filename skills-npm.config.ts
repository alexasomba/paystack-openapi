import { defineConfig } from "skills-npm";

export default defineConfig({
  source: "package.json",
  // Root scan is intentional: skills-npm 1.1 recursive mode scans child workspace
  // node_modules folders and misses the root workspace links below.
  recursive: false,
  include: [
    "@alexasomba/paystack-node",
    "@alexasomba/paystack-axios",
    "@alexasomba/paystack-browser",
    "@alexasomba/paystack-inline",
  ],
});
