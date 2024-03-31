import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'backend_sanity', 

  projectId: 'k21eb9nx',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), deskTool()],

  schema: {

    types: schemaTypes,
  },
}) // 
