import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Personal portfolio',

  projectId: 'xt0q7oh0',
  dataset: 'prodaction',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
