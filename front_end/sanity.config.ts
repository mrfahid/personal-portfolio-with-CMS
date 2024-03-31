import { defineConfig } from "sanity";
import deskTool from "@sanity/desk";

const config = defineConfig({
  projectId: 'k21eb9nx',
  dataset: "production",
  title: "My Personal Portfolio",
  apiVersion: "2024-03-26",
  basePath: "/admin",
  plugins: [deskTool],
});

export default config;
