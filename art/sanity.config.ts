import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'show',
  title: 'objets art',

  projectId: 'toiy8lva',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: 
      schemaTypes,
    
  },
});

