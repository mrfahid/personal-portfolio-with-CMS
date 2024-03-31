import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

const config = defineConfig({
  projectId: 'k21eb9nx',
  dataset: "production",
  title: "My Personal Portfolio",
  apiVersion: "2024-03-26",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
});

export default config;
